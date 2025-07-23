import BackButton from "@/components/BackButton";
import LegislationForm from "@/components/legislation/LegislationForm";

const page = () => {
  return (
    <div>
      <h3>Create Page</h3>
      <BackButton link={"/legislation"} text="Go Back" />
      <LegislationForm
        defaultValues={{
          authority: "",
          category: "",
          documentType: "",
          key: "",
          publishedDate: "",
          summary: {
            en: "",
            ka: "",
          },
          title: {
            en: "",
            ka: "",
          },
          id:""
        }}
      />
    </div>
  );
};

export default page;
