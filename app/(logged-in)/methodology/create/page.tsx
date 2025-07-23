import BackButton from "@/components/BackButton";
import { MethodologyForm } from "@/components/methodology/MethodologyForm";

const page = () => {
  return (
    <div>
      <div className="max-w-4xl px-4 py-6">
        <BackButton text="Go Back To Methodology" link="/methodology" />
        <MethodologyForm
          defaultValues={{
            title: { en: "", ka: "" },
            blocks: [],
            description: {en: "", ka:""},
            key: "",
            slug: {en:"", ka:""},
            
          }}
        />
      </div>
    </div>
  );
};

export default page;
