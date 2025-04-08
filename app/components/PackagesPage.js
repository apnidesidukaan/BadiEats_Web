"use client";
import React from "react";
import { useParams } from "next/navigation";
import { Button } from "./ui/button/button";

const featureSets = {
    cyberSecurity: {
        title: "Cyber Security",
        content: `Our Cyber Security services provide comprehensive protection against digital threats. We offer a range of packages tailored to meet the unique needs of your business, ensuring that your data and systems are secure from potential breaches.`,
        featureList: [
            { key: "support", label: "24/7 Support" },
            { key: "securityAudit", label: "Security Audit" },
            { key: "cloudBackup", label: "Cloud Backup" },
            { key: "maintenance", label: "Annual Maintenance" },
        ],
        packages: [
            {
                name: "Basic",
                price: "₹5,000 / yr",
                features: {
                    support: true,
                    securityAudit: false,
                    cloudBackup: false,
                    maintenance: true,
                },
            },
            {
                name: "Standard",
                price: "₹10,000 / yr",
                features: {
                    support: true,
                    securityAudit: true,
                    cloudBackup: false,
                    maintenance: true,
                },
            },
            {
                name: "Premium",
                price: "₹20,000 / yr",
                features: {
                    support: true,
                    securityAudit: true,
                    cloudBackup: true,
                    maintenance: true,
                },
            },
        ],
    },
    amc: {
        title: "Annual Maintenance Contract (AMC)",
        content: `Our AMC packages ensure that your IT systems are always up-to-date and secure. We provide regular maintenance, updates, and support to keep your infrastructure running smoothly.`,
        featureList: [
            { key: "consulting", label: "Consulting Hours" },
            { key: "training", label: "Team Training" },
            { key: "projectManagement", label: "Project Management" },
            { key: "reports", label: "Monthly Reports" },
        ],
        packages: [
            {
                name: "Starter",
                price: "₹4,000 / yr",
                features: {
                    consulting: true,
                    training: false,
                    projectManagement: false,
                    reports: true,
                },
            },
            {
                name: "Growth",
                price: "₹8,000 / yr",
                features: {
                    consulting: true,
                    training: true,
                    projectManagement: false,
                    reports: true,
                },
            },
            {
                name: "Enterprise",
                price: "₹15,000 / yr",
                features: {
                    consulting: true,
                    training: true,
                    projectManagement: true,
                    reports: true,
                },
            },
        ],
    },
};

const PackagesPage = () => {
    const { slug } = useParams();
    const currentSet = featureSets[slug] || featureSets["cyberSecurity"];
    const { packages, featureList } = currentSet;

    return (
        <div className="mx-auto py-12 px-4 bg-background-section w-full mt-4">
            <h1 className="text-3xl font-bold text-center mb-4 text-primary-text">
                {currentSet.title} Packages
            </h1>
            <p className="text-center max-w-2xl mx-auto text-gray-600 dark:text-gray-400 mb-8">
                {currentSet.content}
            </p>

            <div className="overflow-x-auto">
                <table className="text-primary-text w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead>
                        <tr>
                            <th className="text-left px-6 py-4 border-b">Features</th>
                            {packages.map((pkg, idx) => (
                                <th key={idx} className="text-center px-6 py-4 border-b">
                                    <div className="text-lg font-semibold">{pkg.name}</div>
                                    <div className="text-sm text-gray-500">{pkg.price}</div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {featureList.map((feature, i) => (
                            <tr key={i} className="border-t">
                                <td className="px-6 py-4 font-medium">{feature.label}</td>
                                {packages.map((pkg, j) => (
                                    <td key={j} className="text-center px-6 py-4">
                                        {pkg.features[feature.key] ? "✅" : "—"}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="mt-10 flex justify-center">
                <Button
                    fullwidth='true'
                    href="/contact"
                //   className="bg-accent text-white px-6 py-3 rounded-full shadow-md hover:bg-primary-dark transition"
                >
                    Contact Us
                </Button>
            </div>
        </div>
    );
};

export default PackagesPage;
