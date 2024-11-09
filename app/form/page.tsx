import CreateForm from "@/components/Form-ui/CreateForm";
import FormValidation from "@/components/page_ui/Form-validation";

const Page = () => {
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
          <CreateForm />
        </div>
      </main>
    </>
  );
};

export default Page;
