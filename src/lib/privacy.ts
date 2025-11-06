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
    phone: "+918908094205",
    email: "gslubricantsodisha@gmail.com",
    gstin: "GBJH453487RH5465326",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.253!2d85.8199!3d20.2544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a7f0c8e9d5f1%3A0x7c5f7b8c9d4e5f6a!2sKedargouri%2C%20Old%20Town%2C%20Bhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1234567890"
  };
};

/**
 * Check if privacy mode is active
 */
export const isPrivacyModeActive = () => HIDE_SENSITIVE_INFO;
