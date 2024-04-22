/* eslint-disable @typescript-eslint/no-unused-vars */
// sum.test.js
import "@testing-library/jest-dom/vitest";
import { describe, expect, test, it, vitest } from "vitest";

import { NewDoctorFormData } from "../src/pages/Doctor";

import { render, screen } from "@testing-library/react";
// import { Doctors } from "../src/pages/Doctors/index.tsx";
// import React from "react";
// import { DoctorHook } from "../src/hooks/doctor.ts";

import { Doctors } from "../src/pages/Doctors";

import { QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "jotai";
import { queryClient } from "../src/App";
// import React from "react";
// import { DoctorHook } from "../src/hooks/doctor";
import * as useDoctors from "../src/hooks/doctor";

export function sum(a: number, b: number) {
  return a + b;
}

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

const useDoctorsSPY = vitest.spyOn(useDoctors, "useDoctors");

const Component = () => {
  // const HydrateAtoms = ({ children }: { children: ReactNode }) => {
  //   useHydrateAtoms([[queryClientAtom, queryClient]]);
  //   return children;
  // };

  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        <Doctors />
      </Provider>
    </QueryClientProvider>
  );
};
describe("testee", () => {
  it("sasasa", () => {
    // const atomDoctor = new DoctorsAtom(service);

    // const doctorHook = new DoctorHook(atomDoctor);
    useDoctorsSPY.mockReturnValue([
      {
        address: "1",
        clinic: "2",
        email: "3",
        name: "lucas",
        specialization: "5",
        phone_number: 6,
        created_at: "",
        id: "",
      },
    ]);
    render(<Component />);

    console.log(screen.debug());
    expect(screen.getByText("lucas")).toBeInTheDocument();
  });
});
test("DEVE CRIAR HOOK", async () => {
  const expect_data: NewDoctorFormData = {
    address: "1",
    clinic: "2",
    email: "3",
    name: "lucas",
    specialization: "5",
    phone_number: 6,
  };
  // const data = useMemo(() => {
  //   const [{ data }] = useAtom(atomDoctor.getDoctors);
  //   return data;
  // }, [atomDoctor.getDoctors]);
  // const [{ data }] = useAtom(atomDoctor.getDoctors);

  // const counter = screen.getByText("lucas");
  // console.log(counter.textContent);
  // console.log(data);

  expect(expect_data.name).toBe(expect_data.name);
});
