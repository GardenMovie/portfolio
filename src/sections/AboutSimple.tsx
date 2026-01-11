import React from "react";
import { Card } from "../components/ui/card";
import IconLinks from "../components/common/IconLinks";

const AboutSimple: React.FC = () => {
  return (
    <section className="relative w-full mb-2">
      <Card className="flex md:flex-row p-8">
        <div className="flex flex-col text-3xl font-bold whitespace-pre leading-tight text-left min-w-[120px]">
          <span>Dody</span>
          <span>Gallerani.</span>
        </div>
        <div className="flex flex-col flex-1 md:items-end gap-2">
          <span className="text-lg font-medium">Let&apos;s connect</span>
          <IconLinks row={true} />
        </div>
      </Card>
    </section>
  );
};

export default AboutSimple;
