import BackButton from "@/components/BackButton";
import StructuredForm from "@/components/ratings/structured/StructuredForm";

const page = () => {
  return (
    <div>
      <h1>Create Structured Rating</h1>
      <BackButton link={"/ratings/structured"} text="Go Back" />
      <StructuredForm
        defaultValues={{
          _id: "",
          institution: { en: "", ka: "" },
          key: "",
          publishedDate: "",
          ratingDetails: { localCurrency: "", localRating: "" },
          ratingTerm: "",
          type: "structured",
        }}
      />
    </div>
  );
};

export default page;
