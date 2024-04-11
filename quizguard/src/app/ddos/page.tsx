"use client";
import { FC, useState } from "react";
import { PageBase } from "../components/PageBase";
import { ModuleKeys } from "../components/ModuleData";
import { ModuleButtonsFooter } from "../components/ModuleButtonsFooter";
import { ModuleContent } from "./ModuleContent";
import { CaseStudy } from "./CaseStudy";
import { ModuleTabs } from "../components/ModuleTabs";

const DdosPage: FC = () => {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <PageBase>
      <ModuleTabs currentTab={currentTab} onTabChange={setCurrentTab} />
      {currentTab === 0 && <ModuleContent />}
      {currentTab === 1 && <CaseStudy />}
      <ModuleButtonsFooter
        nextLink="/quiz-cover"
        nextText="Take the quiz"
        previousLink="/mitm"
        moduleCompletionKey={ModuleKeys.DDOS}
      />
    </PageBase>
  );
};

export default DdosPage;
