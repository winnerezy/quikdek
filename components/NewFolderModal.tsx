"use client";

import { createFolder } from "@/lib/actions";
import { closeNewFolderModal } from "@/lib/redux/newFolderSlice";
import { AppDispatch } from "@/lib/redux/store";
import { fetchFolders } from "@/lib/redux/thunk";
import { State } from "@/types";
import { Input } from "@headlessui/react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "./ui/use-toast";

export const NewFolderModal = () => {
  const dispatch = useDispatch<AppDispatch>();
  const open = useSelector((state: State) => state.newfoldermodal.isOpen);

  const [name, setName] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {toast} = useToast()

  const handleFolder = async () => {
    setIsLoading(true);
    await createFolder(name);
    setIsLoading(false);
    dispatch(closeNewFolderModal());
    toast({
      title: "Created folder successfully",
    });
    dispatch(fetchFolders())
  };

  return (
    <Modal
      open={open}
      onClose={() => dispatch(closeNewFolderModal())}
      className="flex items-center justify-center"
    >
      <Box
        sx={{
          width: 800,
          height: 300,
          backgroundColor: "var(--background)",
          color: "var(--text-2)",
          borderRadius: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 10,
          position: "relative",
          marginRight: 2,
          marginLeft: 2,
          borderColor: "var(--border}",
          borderWidth: 2
        }}
      >
        <h4 className="font-bold text-3xl absolute top-8 left-20 text-[--purple]">
          Create New Folder
        </h4>
        <Input
          className="outline-none w-full py-4 border-b-2 border-[--purple] text-[--input-text] placeholder:text-gray-300 bg-transparent"
          placeholder="Enter folder name"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
        />
        <button
          className="bg-[--purple] w-36 h-10 rounded-lg self-end p-2 absolute right-20 bottom-8 text-white"
          onClick={handleFolder}
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="loading loading-dots loading-md self-center"></span>
          ) : (
            "Add Folder"
          )}
        </button>
      </Box>
    </Modal>
  );
};
