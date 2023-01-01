"use client";

import { ReactNode } from "react";
import { RecoilRoot } from "recoil";

interface Props {
    children: ReactNode;
}

const RecoilContext = (props: Props) => {
    const { children } = props;

    return <RecoilRoot>{children}</RecoilRoot>;
};

export default RecoilContext;
