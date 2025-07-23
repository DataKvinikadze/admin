import BackButton from "@/components/BackButton";
import GovernanceForm from "@/components/ratings/governance/GovernanceForm";

const page = () => {
  return (
    <div>
      <h1>Create Page</h1>
      <BackButton link="/governance/create" text="Go Back" />
      <GovernanceForm
        defaultValues={{
          _id: "",
          institution: {
            en: "",
            ka: "",
          },
          key: "",
          publishedDate: "",
          ratingDetails: {
            boardPoint: 0,
            boardView: "",
            disclosurePoint: 0,
            disclosureView: "",
            institutionPoint: 0,
            institutionView: "",
            shareholdersPoint: 0,
            shareholdersView: "",
            stakeholdersPoint: 0,
            stakeholdersView: "",
          },
          ratingTerm: "",
          type: "governance",
        }}
      />
    </div>
  );
};

export default page;
