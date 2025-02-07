"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const CreateProfile = () => {
  const route = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("* Select Professional Status");

  const options = [
    { value: "developer", label: "Developer" },
    { value: "junior", label: "Junior Developer" },
    { value: "senior", label: "Senior Developer" },
    { value: "manager", label: "Manager" },
    { value: "student", label: "Student" },
    { value: "teacher", label: "Instructor or Teacher" },
    { value: "intern", label: "Intern" },
    { value: "other", label: "Other" },
  ];

  return (
    <div className="px-16 pb-10">
      <h1 className="font-bold text-[50px] leading-[60px] text-[#0f3352] pt-8">
        Create Your Profile
      </h1>
      <h2 className="text-[#333333] text-2xl py-5">
        Let's get some information to make your
      </h2>
      <div className="relative w-full">
        {/* Dropdown Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-4 py-2 border-2 border-[#000000a9] rounded-md text-xl bg-white text-left"
        >
          {selected}
        </button>

        {/* Dropdown Options */}
        {isOpen && (
          <ul className="absolute w-full bg-white border-2 border-[#000000a9] rounded-md shadow-lg mt-1 z-10">
            {options.map((option) => (
              <li
                key={option.value}
                onClick={() => {
                  setSelected(option.label);
                  setIsOpen(false);
                }}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-xl"
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
      <form action="">
        <p className="text-gray-600 pb-6 text-sm">
          Give us an idea of where you are at in your career
        </p>
        <input
          type="text"
          placeholder="Company"
          className="w-full border-2 border-[#000000a9] px-2 py-2 rounded-md text-xl "
        />
        <p className="text-gray-600 pb-6 text-sm">
          Could be your own company or one you work for
        </p>
        <input
          type="text"
          placeholder="Website"
          className="w-full border-2 border-[#000000a9] px-2 py-2 rounded-md text-xl "
        />
        <p className="text-gray-600 pb-6 text-sm">
          Could be your own or a company website
        </p>
        <input
          type="text"
          placeholder="Location"
          className="w-full border-2 border-[#000000a9] px-2 py-2 rounded-md text-xl "
        />
        <p className="text-gray-600 pb-6 text-sm">
          City & state suggested (eg. Boston, MA)
        </p>
        <input
          type="text"
          placeholder="* Skills"
          className="w-full border-2 border-[#000000a9] px-2 py-2 rounded-md text-xl "
        />
        <p className="text-gray-600 pb-6 text-sm">
          Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
        </p>
        <input
          type="text"
          placeholder="GitHub Username"
          className="w-full border-2 border-[#000000a9] px-2 py-2 rounded-md text-xl "
        />
        <p className="text-gray-600 pb-6 text-sm">
          If you want your latest repos and a Github link, include your username
        </p>
        <textarea
          placeholder="Info about yourself"
          className="w-full border-2 border-[#000000a9] px-2 py-2 rounded-md text-xl "
        ></textarea>
        <p className="text-gray-600 pb-6 text-sm">
          Tell us a little about yourself
        </p>
      </form>
      <div className="flex items-center gap-10 text-lg">
        <button className="px-10 py-2 bg-[#0f3352] text-white rounded-sm">
          Add Social Network Links
        </button>
        <p className="text-gray-700">* Optional</p>
      </div>
      <div className="flex gap-5 pt-10">
        <button className="px-5 py-2 bg-[#187e3ff1] text-white rounded-md text-lg">
          Send
        </button>
        <button className="px-5 py-2 bg-[#4b5563] text-white rounded-md text-lg">
          Go back
        </button>
      </div>
    </div>
  );
};

export default CreateProfile;
