import React from "react";
import HeaderNavigation from "./HeaderNavigation";
import PageContainer from "./PageContainer";

export default function Header() {
  return (
    <nav className="p-4">
      <PageContainer>
        <div className="flex items-center justify-evenly w-full">
          <HeaderNavigation />
        </div>
      </PageContainer>
    </nav>
  );
}
