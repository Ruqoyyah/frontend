import FaqCard from "@/components/faqCards";
import Layout from "@/components/layout";
import CreatFaqModal from "@/components/modals/createFaqModal";
import { IFaq } from "@/models/index.model";
import { useDisclosure } from "@chakra-ui/react";
import { MdAdd } from "react-icons/md";

export default function Faqs() {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const faqs: IFaq[] = [{ question: "Whats happening", answer: "Life Tough" }];

  return (
    <Layout>
      <div className="mt-5 flex p-5 w-full items-center justify-end">
        <button
          className="w-fit h-fit px-5 py-2 rounded-2xl transition ease-in-out duration-700 hover:scale-75 bg-black text-secondary flex items-center gap-2 font-semibold"
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
      <CreatFaqModal isOpen={isOpen} onClose={onClose} />
    </Layout>
  );
}
