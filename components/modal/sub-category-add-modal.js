import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";

const SubCategoryAddModal = ({ isOpen, setIsOpen, subCategory }) => {
  const [newSubCategory, setNewSubCategory] = useState();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  // console.log("sub items in modal are", subCategoryItems);
  // console.log("new item is", newSubCaterogy);

  const addItemHandler = () => {
    subCategory.push(newSubCategory);
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-between">
                    <Dialog.Title
                      as="h3"
                      className="text-2xl font-medium leading-6 text-gray-900 py-2"
                    >
                      Sub Categories
                    </Dialog.Title>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-rose-100 px-4 py-0.5 text-lg font-medium text-rose-900 hover:bg-rose-200 focus:outline-none "
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                  <div className="mt-2">
                    {subCategory.map((item, index) => {
                      return (
                        <div className="text-xl font-normal px-6 py-0.5 cursor-default" key={index}>
                          <div>{item}</div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-4 ">
                    <form className=" flex justify-between">
                      <input
                        className="px-2 py-2 mx-2 rounded focus:outline-none border-2 w-full"
                        placeholder="Add sub category options"
                        onChange={(event) => {
                          setNewSubCategory(event.target.value.toLowerCase());
                        }}
                      />

                      <button
                        type="button"
                        className="rounded-md bg-blue-100 px-8 py-2 text-lg font-medium text-blue-900 hover:bg-blue-200 focus:outline-none "
                        onClick={(event) => {
                          // event.preventDefault;
                          addItemHandler();
                        }}
                      >
                        Add
                      </button>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default SubCategoryAddModal;
