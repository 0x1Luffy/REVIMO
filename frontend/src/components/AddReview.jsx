import { useState } from "react";
import axios from "axios";

const ModernInputForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    mobileimage: null,
    billimage: null,
    price: "",
    rating: "",
    stars: "",
    recommendation: "buy",
  });

  const [previews, setPreviews] = useState({
    mobileimage: null,
    billimage: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData((prevState) => ({
        ...prevState,
        [name]: files[0],
      }));
      setPreviews((prevState) => ({
        ...prevState,
        [name]: URL.createObjectURL(files[0]),
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object to send as multipart/form-data
    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("price", formData.price);
    formDataToSend.append("rating", formData.rating);
    formDataToSend.append("stars", formData.stars);
    formDataToSend.append("recommendation", formData.recommendation);

    // Append image files to FormData
    if (formData.mobileImage) {
      formDataToSend.append("mobileImage", formData.mobileImage);
    }
    if (formData.billImage) {
      formDataToSend.append("billImage", formData.billImage);
    }

    try {
      const response = await axios.post(
        "https://revimo-backend.vercel.app/api/v1/reviews/create-review",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            // Include authorization headers if needed
            // Authorization: `Bearer ${token}`,
          },
        }
      );

      // Handle success response
      console.log("Product created:", response.data);
      setFormData({
        title: "",
        description: "",
        mobileImage: null,
        billImage: null,
        price: "",
        rating: "",
        stars: "",
        recommendation: "buy",
      });
      setPreviews({
        mobileImage: null,
        billImage: null,
      });
    } catch (error) {
      // Handle error response
      if (error.response) {
        console.error("Failed to create product:", error.response.data.error);
      } else {
        console.error("Error submitting form:", error.message);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h2 className="text-3xl font-extrabold text-gray-900">
                  Sharing Is Caring 😇.
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Mobile Name
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows="3"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
                    ></textarea>
                  </div>

                  <div>
                    <label
                      htmlFor="mobileImage"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Mobile Image
                    </label>
                    <input
                      type="file"
                      id="mobileImage"
                      name="mobileImage"
                      onChange={handleFileChange}
                      accept="image/*"
                      className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                    />
                    {previews.mobileImage && (
                      <img
                        src={previews.mobileImage}
                        alt="Mobile preview"
                        className="mt-2 h-20 w-auto"
                      />
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="billImage"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Bill Image
                    </label>
                    <input
                      type="file"
                      id="billImage"
                      name="billImage"
                      onChange={handleFileChange}
                      accept="image/*"
                      className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                    />
                    {previews.billImage && (
                      <img
                        src={previews.billImage}
                        alt="Bill preview"
                        className="mt-2 h-20 w-auto"
                      />
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="price"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Price
                    </label>
                    <input
                      type="number"
                      id="price"
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      step="0.01"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="rating"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Rating
                    </label>
                    <input
                      type="number"
                      id="rating"
                      name="rating"
                      value={formData.rating}
                      onChange={handleInputChange}
                      min="0"
                      max="5"
                      step="0.1"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="stars"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Stars
                    </label>
                    <input
                      type="number"
                      id="stars"
                      name="stars"
                      value={formData.stars}
                      onChange={handleInputChange}
                      min="0"
                      max="5"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Recommendation
                    </label>
                    <div className="mt-2 space-x-4">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="recommendation"
                          value="buy"
                          checked={formData.recommendation === "buy"}
                          onChange={handleInputChange}
                          className="form-radio h-4 w-4 text-indigo-600"
                        />
                        <span className="ml-2">Buy</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="recommendation"
                          value="dont-buy"
                          checked={formData.recommendation === "dont-buy"}
                          onChange={handleInputChange}
                          className="form-radio h-4 w-4 text-indigo-600"
                        />
                        <span className="ml-2">Don't Buy</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernInputForm;
