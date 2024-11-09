"use client";
import React, { useState, useEffect } from "react";

const FormValidation = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    return () => {
      setIsClient(false);
    };
  }, []);

  return (
    <>
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <div className="flex items-center">
          <h1 className="text-lg font-semibold md:text-2xl">Form Validation</h1>
        </div>
        <div
          className="flex flex-1 w-full rounded-lg border border-dashed shadow-sm p-10"
          x-chunk="dashboard-02-chunk-1"
        >
          {/* Table */}
        </div>
      </main>
    </>
  );
};

export default FormValidation;
