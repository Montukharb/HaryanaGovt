import React from "react";
import { useForm } from "react-hook-form";

function FoamValidation() {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isSubmitting, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 3000)).then(() => {
      console.log(data);
      console.log(data.message);
    
    });
  };

  return (
    <div className="max-w-xl min-h-32 border text-center p-2">
      <h1 className="text-green-700 font-bold text-[19px]">
        Simple Form Validation
      </h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="text-[20px]" htmlFor="username">
          First Name:{" "}
        </label>
        <input
          type="text"
          {...register("FirstName", {
            required: "First Name is required",
            minLength: { value: 3, message: "Minimun length is 3 characters" },
            maxLength: {
              value: 15,
              message: "Maximum length is 15 characters",
            },
            validate: (value) =>
              /^[A-Za-z]+$/.test(value) || "Only alphabets are allowed",
          })}
          className="border-2 rounded p-0.5"
        />
        {errors.FirstName && (
          <p className="text-red-500">{errors.FirstName.message}</p>
        )}
        <br />
        <label htmlFor="LastName" className="text-[20px]">
          LastName:{" "}
        </label>
        <input
          type="text"
          {...register("LastName", {
            required: "LastName is required",
            minLength: { value: 3, message: "Minimun length is 3 characters" },
            maxLength: {
              value: 15,
              message: "Maximum length is 15 characters",
            },
            // validate parameter use only for custom validation and regex all formation or error handling if you use more than one validation then use if else statement or return last true for all conditon check must be true
            validate: (value) => {
              if(!/^[A-Za-z]+$/.test(value))
                {
                return "Only alphabets are allowed"
                }
               if(value === "admin")
               {
              
              return "admin is not allowed";
               }
              return true;
            },
          })}
          className="border-2 rounded p-0.5"
        />
        {errors.LastName && (
          <p className="text-red-500">{errors.LastName.message}</p>
        )}
        <br />

        <label className="text-[20px]" htmlFor="email">
          Email:{" "}
        </label>
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            // disabled:false
            onBlur: (e) => {
              console.log(`blur event ${e.target.value}`);
            },
          })}
          className="border-2 rounded p-0.5"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <br />
        <label htmlFor="Gender" className="text-[20px]">
          Gender:{" "}
        </label>
        <select {...register("gender", { required: "Select gender" })}>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
          <option value="Other">Other</option>
        </select>
        <br />
        {errors.gender && (
          <p className="text-red-500">{errors.gender.message}</p>
        )}

        <label htmlFor="message" className="text-[20px]">
          Message:{" "}
        </label>
        <textarea
          className="border-2 rounded"
          {...register("message", { required: "Message is required" })}
          cols={25}
          rows={3}
        ></textarea>
        {errors.message && (
          <p className="text-red-500">{errors.message.message}</p>
        )}
        <br />

        <button
          type="submit"
          disabled={!isDirty || isSubmitting || !isValid}
          className="mt-2 border p-2 w-26 rounded bg-blue-800 text-amber-50 text-2xl shadow cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default FoamValidation;
