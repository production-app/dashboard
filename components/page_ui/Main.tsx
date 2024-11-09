"use client";
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { useQuery } from "@tanstack/react-query";
import { DataTable } from "../datatable/datatable";
import { columns } from "../datatable/columns";

const Main = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    return () => {
      setIsClient(false);
    };
  }, []);
  const {
    data = [],
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["dataObj"],
    queryFn: async () => {
      return await fetch("https://dummyjson.com/users")
        .then((res: any) => res.json())
        .then((data: any) => data.users);
    },
  });

  return (
    <>
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <div className="flex items-center">
          <h1 className="text-lg font-semibold md:text-2xl">Fetch Data</h1>
        </div>
        <div
          className="flex flex-1 w-full rounded-lg border border-dashed shadow-sm p-10"
          x-chunk="dashboard-02-chunk-1"
        >
          {/* Table */}
          <DataTable columns={columns} data={data} />
        </div>
      </main>
    </>
  );
};

export default Main;
