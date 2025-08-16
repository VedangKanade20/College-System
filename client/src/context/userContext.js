"use client";

import apiUrl from "@/helper/apiUrl";
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [allocatedSubjects, setAllocatedSubject] = useState([]);
  const [programBatchSemester, setProgramBatchSemester] = useState({});

  // Function to fetch the logged in user data
  const fetchUser = async () => {
    try {
      const { data } = await axios.get(`${apiUrl}/users/user`, {
        withCredentials: true,
      });

      setUser(data?.user);
    } catch (error) {
      setUser(null);
      console.log(error);
    }
  };

  // Function to fetch the all program, Batch, Semester data
  const fetchProgramBatchSemester = async () => {
    try {
      const { data } = await axios.get(
        `${apiUrl}/common/get-program-batch-semester`
      );
      setProgramBatchSemester(data);
    } catch (error) {
      setProgramBatchSemester(null);
      console.log(error);
    }
  };

  const fetchAllocatedSubjectToFaculty = async () => {
    try {
      const { data } = await axios.get(
        `${apiUrl}/semester/program/689ddff05229b08c533fcb32/batch/689df9bde4a7f2be3a198d9f/semester/1/subjects`,
        {
          withCredentials: true,
        }
      );

      setAllocatedSubject(data);
    } catch (error) {
      setAllocatedSubject([]);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
    // fetchAllocatedSubjectToFaculty();
    fetchProgramBatchSemester();
  }, []);

  console.log("This is the logged user data", user);
  console.log("This is the allocaed subjects", allocatedSubjects);
  console.log("This is the Program Batch Semester data", programBatchSemester);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
