import React, { useState, useRef,useEffect } from 'react';
import { Input } from '../input/input';
import SingleImageUploader from '../uploader/imageUploader';
import Loader from '../status/Loader';
import SuccessBadge from '../status/SuccessBadge';
import ErrorBadge from '../status/ErrorBadge';
//==================================================================
const AddVendor = ({ title, description, isOpen, onClose }) => {
  //==================================================================
  const modalRef = useRef(null);
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };
  useEffect(() => {

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);


  const [logoFile, setLogoFile] = useState(null);
  const [apiResponse, setApiResponse] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const vendorData = new FormData();
    vendorData.append('name', formData.name);
    vendorData.append('email', formData.email);
    vendorData.append('phone', formData.phone);
    vendorData.append('businessName', formData.businessName);
    if (logoFile) vendorData.append('logo', logoFile);

    const { success, error: vendorError, successMessage } = await addVendor(vendorData);

    if (success) {
      setApiResponse(successMessage);
    } else {
      setApiResponse(vendorError);
      console.error('Error adding vendor:', vendorError);
    }
  };

  if (!isOpen) return null;
  //==================================================================
  return (
    <div ref={modalRef}  className=" fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.6)] backdrop-blur-sm z-50">
      <div className="scrollbar bg-background-section p-2 rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto transition-transform transform scale-100 border border-accent/60 border-4">
        <div className="bg-background p-6 rounded-md mb-6">
          <h3 className="text-xl font-bold mb-2 text-center text-primary-text">{title}</h3>
          <p className="text-sm text-secondary-text text-center">{description}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 p-4">
          <label className="block mb-2 text-sm text-primary-text font-semibold">Name</label>

          <Input label="Vendor Name" name="name" value={formData.name} onChange={handleChange} required />
          <label className="block mb-2 text-sm text-primary-text font-semibold">Mobile</label>
          <Input label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required />
          <label className="block mb-2 text-sm text-primary-text font-semibold">Address</label>
          <Input label="Phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />

          <SingleImageUploader setImageFile={setLogoFile} />

          <div className="flex justify-end gap-4 mt-8">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded-lg bg-muted text-primary-text border border-[#d3c5c5]">Cancel</button>
            <button type="submit" className="px-6 py-2 rounded-lg bg-accent text-white font-semibold hover:scale-105 transition-transform">
              {1 ? <Loader /> : "Add Vendor"}
            </button>
          </div>

          {/* {1 && <SuccessBadge onClose={onClose} message={apiResponse} />} */}
          {/* {1 && <ErrorBadge message={apiResponse} />} */}
        </form>
      </div>
    </div>
  );
};
//==================================================================

export default AddVendor;
//==================================================================
