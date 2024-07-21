import { useState, ChangeEvent, FormEvent } from "react";
import '@fontsource/luckiest-guy';
export const Card = () => {
  interface Form {
    name: string;
    class: string;
    rollnum: string;
  }

  const [formData, setFormData] = useState<Form>({
    name: "",
    class: "",
    rollnum: ""
  });

  const [submittedCard, setSubmittedcard] = useState<Form[]>([]);
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmittedcard((prevCard)=>[...prevCard, formData])
    setFormData({
        name: '',
        class: '',
        rollnum:''
    })
  };

  return (
    <div className="h-screen w-screen">
        <div className="">
            <div className="flex justify-center p-2">
                <strong className="font-LuckiestGuy text-4xl"><a  className="text-white" href="https://github.com/sahiwl/InfoCard" target="_blank">InfoCard</a></strong>
            </div>
          <form onSubmit={handleSubmit} className="">
            <div className="flex justify-around">

            <label>
              Enter your name: &nbsp;
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Your Name"
                onChange={handleInputChange}
                className="mt-2 mb-4 p-2 border border-gray-300 rounded "
                />
            </label>
            <label>
              Enter your class: &nbsp;
              <input
                type="text"
                name="class"
                placeholder="Class"
                value={formData.class}
                onChange={handleInputChange}
                className="pl-2` mt-2 mb-4 p-2 border border-gray-300 rounded"
                />
            </label>
            <label>
              Enter your rollnum: &nbsp;
              <input
                type="text"
                name="rollnum"
                placeholder="Roll Number"
                value={formData.rollnum}
                onChange={handleInputChange}
                className="mt-2 mb-4 p-2 border border-gray-300 rounded"
                />
            </label>
                </div>
            <button
              type="submit"
              className=" w-full py-2 px-4 bg-blue-500 text-white rounded"
            >
              Submit
            </button>
          </form>
          <div className="absolute bottom-0 flex justify-around w-full ">
            <a className="text-white" href="https://github.com/sahiwl" target="_blank">&copy;Sahiwl</a>
          </div>
        </div>
        <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-auto max-h-[550px]">
            {submittedCard.map((form, index)=>(
             <div key={index} className="max-w-md w-full p-8 shadow-lg rounded-lg text-center mt-4">
             <h1 className="text-2xl font-bold mb-4">Student Information</h1>
             <p className="text-lg mb-2">
               <strong>Name:</strong> {form.name}
             </p>
             <p className="text-lg mb-2">
               <strong>Class:</strong> {form.class}
             </p>
             <p className="text-lg mb-2">
               <strong>Roll Number:</strong> {form.rollnum}
             </p>
           </div>
            ))}
        </div>
        </div>
  )
};
