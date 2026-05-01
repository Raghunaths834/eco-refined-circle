import { HIDE_SENSITIVE_INFO, PRIVACY_CONFIG } from "@/config/privacy";

/**
 * Get sensitive information based on privacy configuration
 * 
 * When HIDE_SENSITIVE_INFO is false, returns actual company information.
 * When HIDE_SENSITIVE_INFO is true, returns generic placeholder text.
 */
export const getSensitiveInfo = () => {
  if (HIDE_SENSITIVE_INFO) {
    return {
      companyFullName: PRIVACY_CONFIG.companyFullName,
      addressLine1: PRIVACY_CONFIG.addressLine1,
      addressLine2: PRIVACY_CONFIG.addressLine2,
      phone: PRIVACY_CONFIG.phone,
      email: PRIVACY_CONFIG.email,
      gstin: PRIVACY_CONFIG.gstin,
      mapUrl: PRIVACY_CONFIG.mapUrl
    };
  }

  // Return actual information
  return {
    companyFullName: "GS Lubricants",
    addressLine1: "Plot -861 Kedargori, Old Town Bhubaneswar",
    addressLine2: "PIN-751002",
    phone: "",
    email: "info@gslubricants.com",
    gstin: "21AAJFG6323M1ZE",
    mapUrl: "https://www.google.com/maps?q=Gurujang,Talcher,Angul,Odisha&output=embed"
  };
};

/**
 * Check if privacy mode is active
 */
export const isPrivacyModeActive = () => HIDE_SENSITIVE_INFO;
