import React, { useState } from "react";

const socialOptions = [
  { label: "Facebook", value: "facebook" },
  { label: "Twitter", value: "twitter" },
  { label: "Instagram", value: "instagram" },
  { label: "YouTube", value: "youtube" },
];

const SocialLink = ({ index, link, handleRemove, handleChange }) => (
  <>
    <div className="flex items-center my-2">
      <select
        value={link.platform}
        onChange={(e) => handleChange(index, "platform", e.target.value)}
        className="w-1/3 p-2 border-2 outline-none rounded-md mr-2"
      >
        {socialOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={link.url}
        onChange={(e) => handleChange(index, "url", e.target.value)}
        placeholder="Profile link/url..."
        className="w-2/3 p-2 border-2 outline-none rounded-md"
      />
      <button
        onClick={() => handleRemove(index)}
        className="ml-2 p-2 border-2 rounded-md text-red-500"
      >
        ✕
      </button>
    </div>
  </>
);

const SocialLinksForm = () => {
  const [links, setLinks] = useState([{ platform: "", url: "" }]);

  const handleAddLink = () => {
    setLinks([...links, { platform: "", url: "" }]);
  };

  const handleRemoveLink = (index) => {
    const newLinks = links.filter((_, i) => i !== index);
    setLinks(newLinks);
  };

  const handleChangeLink = (index, field, value) => {
    const newLinks = links.map((link, i) =>
      i === index ? { ...link, [field]: value } : link
    );
    setLinks(newLinks);
  };

  return (
    <div className=" w-full p-4">
      {links.map((link, index) => (
        <SocialLink
          key={index}
          index={index}
          link={link}
          handleRemove={handleRemoveLink}
          handleChange={handleChangeLink}
        />
      ))}
      <button
        onClick={handleAddLink}
        className="mt-4 p-2 bg-gray-200 rounded-md w-full"
      >
        + Add New Social Link
      </button>
    </div>
  );
};

export default SocialLinksForm;
