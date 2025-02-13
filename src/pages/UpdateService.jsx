import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UpdateService = () => {

    const service = useLoaderData();
    //const { user } = useContext(AuthContext)
    const { _id, image, name, description, price, area } = service
    console.log(service)

    const navigate = useNavigate()

    const handleUpdateService = async (e) => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const image = form.image.value;
        const area = form.area.value;
        const description = form.description.value;
        const price = form.price.value;

        const updateService = {
            name,
            image,
            area,
            description,
            price
        }
        console.log(updateService)

        try {
            const { data } = await axios.put(`https://b9a11-consultation-server.vercel.app/addService/${_id}`, updateService)

            console.log(data)
            navigate('/manageService')

            toast.success('Service updated Successfully')
        } catch (err) {
            console.log(err)
            toast.error(err?.message)
        }
    }

    return (
        <div>
            <Helmet>
                <title>
                    MedExpress | Update Service
                </title>
            </Helmet>


            <div className="font-poppins">
                <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                    <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Update Details</h2>

                    <form onSubmit={handleUpdateService}>
                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div className='form-control'>
                                <label className="text-gray-700 dark:text-gray-200">Service Name</label>
                                <input placeholder='Name' name="name" type="text"
                                    defaultValue={name} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            <div className="form-control">
                                <label className="text-gray-700 dark:text-gray-200">Image URL</label>
                                <input type="url" placeholder='image_url' name="image"
                                    defaultValue={image} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            <div className='form-control'>
                                <label className="text-gray-700 dark:text-gray-200">Price</label>
                                <input type="number" placeholder='price' name="price"
                                    defaultValue={price} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            <div className='form-control'>
                                <label className="text-gray-700 dark:text-gray-200">Service Area</label>
                                <input id="passwordConfirmation" type="text" name="area"
                                    defaultValue={area} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            <div className="form-control w-full">
                                <label className="block text-gray-500 dark:text-gray-300">Description</label>

                                <textarea placeholder='description' name="description"
                                    defaultValue={description} className="block  mt-2 w-full  placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"></textarea>
                            </div>

                        </div>

                        <div className="flex justify-end mt-6">
                            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Update</button>
                        </div>
                    </form>
                </section>
            </div>


        </div >
    );
};

export default UpdateService;