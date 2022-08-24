import React from "react";
import PlanCard from "../../Components/PlanCard";
import SectionTitle from "../../Components/SectionTitle";

import { PRICING_PLAN_DATA } from "./constants";

import "./styles.scss";

const PricingPlan = () => {
  return (
    <section className="pricing-plan-section">
      <div className="pricing-plan-section__container">
        <SectionTitle
          title={PRICING_PLAN_DATA.sectionTitle.title}
          subtitle={PRICING_PLAN_DATA.sectionTitle.subtitle}
          titleClass={PRICING_PLAN_DATA.sectionTitle.titleClass}
        />
        <div className="pricing-plan-section__plans-holder">
          {PRICING_PLAN_DATA.pricingCardsInfo.map(
            ({ id, cardTitle, price, includedOptions }) => (
              <PlanCard
                key={id}
                cardTitle={cardTitle}
                price={price}
                freeTrial={includedOptions.freeTrial}
                freeProjects={includedOptions.freeProjects}
                enabledTech={includedOptions.enabledTech}
                support={includedOptions.support}
                btnLabel={PRICING_PLAN_DATA.btnLabel}
                btnClass={PRICING_PLAN_DATA.btnClass}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;
