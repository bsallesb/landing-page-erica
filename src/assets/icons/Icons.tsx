// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';
import { TfiEmail } from 'react-icons/tfi';
import { GrMapLocation } from 'react-icons/gr';
import { MdOutlineRateReview } from 'react-icons/md';
import {
  FaHome,
  FaUser,
  FaWhatsapp,
  FaChevronRight,
  FaInstagram,
  FaStar,
  FaWaze,
  FaPlus,
  FaRegStar,
  FaTooth,
} from 'react-icons/fa';

export const IconMap: { [key: string]: React.ReactElement } = {
  home: <FaHome />,
  user: <FaUser />,
  whatsapp: <FaWhatsapp />,
  chevronRight: <FaChevronRight />,
  instagram: <FaInstagram />,
  star: <FaStar />,
  waze: <FaWaze />,
  email: <TfiEmail />,
  map: <GrMapLocation />,
  plus: <FaPlus />,
  emptyStar: <FaRegStar />,
  tooth: <FaTooth />,
  RateReview: <MdOutlineRateReview />,
};
