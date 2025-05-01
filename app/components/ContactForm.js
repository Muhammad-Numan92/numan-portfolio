"use client";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("/api/send-email", data);

      if (res.data.success) {
        toast.success("Inquiry sent successfully!");
        reset();
      } else {
        toast.error("Failed to send inquiry.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-gray-900 p-8 rounded-sm shadow-lg border border-teal-950"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <input
            {...register("firstName", { required: "First name is required" })}
            type="text"
            placeholder="First Name"
            id="first-name-input"
            className="p-3 rounded-sm w-full bg-gray-900 border border-teal-950 text-gray focus:border-teal-700 focus:outline-none"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.firstName.message}
            </p>
          )}
        </div>

        <div>
          <input
            {...register("lastName", { required: "Last name is required" })}
            type="text"
            placeholder="Last Name"
            className="p-3 rounded-sm w-full bg-gray-900 border border-teal-950 text-gray focus:border-teal-700 focus:outline-none"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.lastName.message}
            </p>
          )}
        </div>
      </div>

      <div className="mb-4">
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Enter a valid email address",
            },
          })}
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-sm bg-gray-900 border border-teal-950 text-gray focus:border-teal-700 focus:outline-none"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div className="mb-4">
        <input
          {...register("subject", { required: "Subject is required" })}
          type="text"
          placeholder="Subject"
          className="w-full p-3 rounded-sm bg-gray-900 border border-teal-950 text-gray focus:border-teal-700 focus:outline-none"
        />
        {errors.subject && (
          <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
        )}
      </div>

      <div className="mb-4">
        <textarea
          {...register("message", { required: "Message is required" })}
          rows="5"
          placeholder="Write your message.."
          className="w-full p-3 rounded-sm bg-gray-900 border border-teal-950 text-gray focus:border-teal-700 focus:outline-none"
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-teal-700 to-teal-950 text-gray font-normal py-3 rounded-sm disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "SEND INQUIRY"}
      </button>

      <p className="text-gray-400 text-center mt-4">
        We&apos;ll get back to you within 24 hours.
      </p>
    </form>
  );
}
