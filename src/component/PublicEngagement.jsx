import React from "react";

const PublicEngagement = () => {
  return (
    <div
      name="public-engagement"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white py-10"
    >
      <div className="max-w-screen-lg mx-auto px-4 flex flex-col justify-center h-full">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Public Engagement
          </p>
          <p className="py-6 text-lg">
            In 2024, I had the honor of representing the{" "}
            <span className="font-semibold">Government of Abia State</span> at
            the{" "}
            <span className="italic">
              National Digital Economy & E-Governance Bill Conference
            </span>{" "}
            held at the{" "}
            <span className="font-semibold">Abia State Government House</span>.
            This experience reflects my commitment to digital transformation and
            e-governance in Nigeria.
          </p>
        </div>

        <div className="w-full flex justify-center mt-8">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/MmEaKwLyFyQ"
            title="National Digital Economy & E-Governance Bill"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-xl shadow-lg max-w-3xl"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default PublicEngagement;
