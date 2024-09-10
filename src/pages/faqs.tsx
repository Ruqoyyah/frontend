import FaqCard from "@/components/faqCards";
import Layout from "@/components/layout";
import ClientNavbar from "@/components/layout/navbar";
import CreatFaqModal from "@/components/modals/createFaqModal";
import { IFaq } from "@/models/index.model";
import { useDisclosure } from "@chakra-ui/react";
import { MdAdd } from "react-icons/md";

export default function Faqs() {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const faqs: IFaq[] = [{ question: "Whats happening", answer: "Life Tough" }];

  return (
    <Layout>
      <ClientNavbar page="FAQs" />
      <div className="p-5">
        <div className=" flex  w-full items-center justify-end">
          <button
            className="w-fit px-5 py-2 bg-[#5E604D] rounded-3xl text-white flex items-center gap-2"
            onClick={onOpen}
          >
            {" "}
            <MdAdd />
            Add New
          </button>
        </div>
        <div className="grid md:grid-cols-3  lg:grid-cols-4  my-8 gap-3">
          {faqs?.map((item, index) => (
            <FaqCard faq={item} key={index} />
          ))}
        </div>
      </div>
      <CreatFaqModal isOpen={isOpen} onClose={onClose} />
    </Layout>
  );
}
