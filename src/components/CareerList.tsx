"use client";

import { ICareerArr } from "@/interface/ICareerArr";
import { useState } from "react";
import { BsFillCaretRightFill } from "react-icons/bs";
import { BsFillCaretDownFill } from "react-icons/bs";
import CareerDetail from "./CareerDetail";

export default function CareerList({
  company,
  date,
  link,
  detail,
}: ICareerArr) {
  const [isDetail, setIsDetail] = useState<boolean>(false);

  const changeDetail = () => {
    setIsDetail(!isDetail);
  };

  return (
    <li className="my-5 mx-0">
      <div className="w-full flex items-center justify-between">
        <strong
          className="flex items-center cursor-pointer hover:underline"
          onClick={changeDetail}
        >
          {isDetail ? (
            <BsFillCaretDownFill className="mr-1" />
          ) : (
            <BsFillCaretRightFill className="mr-1" />
          )}
          {company}
        </strong>
        <div>{date}</div>
      </div>
      {isDetail && <CareerDetail link={link} details={detail} />}
    </li>
  );
}
