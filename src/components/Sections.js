import React from 'react';
import Section from './Section';

const Sections = () => {
    return (
        <React.Fragment>
            <Section
                name={"management"}
                images={
                    [
                        "costhubs2x.png",
                        "budgetsalerts.png",
                        "forecasting2x-2.png"
                    ]}
                context={
                    [
                        "UNDERSTAND AND TRACK",
                        "Give real-life context to your Azure costs.",
                        "Use CostHubs to group resources according to the project or business unit that’s using them. Empower teams to stay on track with budgets and smart alerts, and always know what lies ahead thanks to AI-powered cost forecasting."
                    ]}
                btnIcon={
                    [
                        "costhubs.svg",
                        "forecast.svg",
                        "variation.svg"
                    ]}
                btnText={["CostHubs", "Budgets and alerts", "Intelligent forecasting"]}
                linkHref={"#"} linkText={"See management features"}
                reverse={false}
            />
            <Section
                name={"optimization"}
                images={
                    [
                        "recommendations2x.png",
                        "costvariations-v22x.png",
                        "resourceallocations-v22x.png"
                    ]}
                context={
                    [
                        "OPTIMIZE AND REDUCE",
                        "Uncover cost-saving opportunities",
                        "Get valuable optimization recommendations to ensure your costs line up with your needs. Drill down into individual resource costs, or get a clear, simple view of the big picture."
                    ]}
                btnIcon={
                    [
                        "recommendations.svg",
                        "reports.svg",
                        "resourceadmin.svg"
                    ]}
                btnText={["Savings recommendations", "Cost explorer", "Resource allocation"]}
                linkHref={"#"} linkText={"See optimization features"}
                reverse={true}
            />
        </React.Fragment>
    );
};

export default Sections;