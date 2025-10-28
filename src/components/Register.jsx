import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { auth, db } from './firebase';
import { doc, setDoc} from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Register({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
     
      await updateProfile(user, {
        displayName: `${firstName} ${lastName}`
      });

      await setDoc(doc(db, "Users", user.uid), {
      firstName: firstName,
      lastName: lastName,
      email: email,
      createdAt: new Date()
    });

      toast.success("Successfully registered!", {
  position: "top-center",
});

onClose();

    } catch (error) {
      alert("Error: " + error.message);
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleRegister}
      className="flex flex-col items-center justify-center space-y-4 w-full relative"
    >
      {/* Close button */}
      <button
        type="button"
        className="absolute top-2 right-2 text-gray-600 hover:text-black"
        onClick={onClose}
      >
        ✕
      </button>

      <h3 className="text-black text-xl mb-3 font-semibold">Sign Up</h3>

      {/* First Name */}
      <div className="w-full max-w-xs flex flex-col">
        <label className="text-sm text-black mb-1">First name</label>
        <input
          type="text"
          className="border rounded-sm border-gray-500 p-2"
          placeholder="First name"
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>

      {/* Last Name */}
      <div className="w-full max-w-xs flex flex-col">
        <label className="text-sm text-black mb-1">Last name</label>
        <input
          type="text"
          className="border rounded-sm border-gray-500 p-2"
          placeholder="Last name"
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>

      {/* Email */}
      <div className="w-full max-w-xs flex flex-col">
        <label className="text-sm text-black mb-1">Email</label>
        <input
          type="email"
          className="border rounded-sm border-gray-500 p-2"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      {/* Password */}
      <div className="w-full max-w-xs flex flex-col">
        <label className="text-sm text-black mb-1">Password</label>
        <input
          type="password"
          className="border rounded-sm border-gray-500 p-2"
          placeholder="Enter a password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button
        type="submit"
        className="px-6 py-2 bg-gradient-to-b from-yellow-200 to-yellow-400 border border-yellow-300 rounded-xl hover:from-yellow-300 active:from-yellow-500"
      >
        Submit
      </button>
      <ToastContainer />

    </form>
    
  );
}
