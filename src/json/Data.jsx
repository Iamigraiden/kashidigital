import { Subtitles } from "lucide-react";

export const clientsLogo = [
  {
    image: "/assets/images/clients/client1.png",
  },
  {
    image: "/assets/images/clients/client2.png",
  },
  {
    image: "/assets/images/clients/client3.png",
  },
  {
    image: "/assets/images/clients/client4.png",
  },
  {
    image: "/assets/images/clients/client5.png",
  },
  {
    image: "/assets/images/clients/client6.png",
  },
  {
    image: "/assets/images/clients/client7.png",
  },
];
export const serviceData = [
  {
    id: "aadhaar-to-pan",
    category: "Verification API's",
    title: "Aadhaar to PAN Verification API",
    titleDis:
      "Kashi Digital APIs offers a powerful Aadhaar to PAN verification API, allowing businesses to validate identities with precision and efficiency.",
    formimg:
      "https://kashidigitalapis.com/assets/link-aadhar-to-pan-wDROFJcv.jpg",
    name: "Aadhaar to PAN",
    imageb:
      "https://kashidigitalapis.com/assets/aadhaar-verification-CMS7zCta.png",
    features: [
      {
        name: "Fast & Accurate",
        discription: "Access government-sourced challan data in real time.",
      },
      {
        name: "Fraud Prevention",
        discription: "Detect mismatches and prevent identity fraud.",
      },
      {
        name: "Seamless Integration",
        discription:
          "Easily integrate with your existing systems using RESTful API.",
      },
      {
        name: "Secure & Compliant",
        discription:
          "Data encryption ensures complete security and compliance.",
      },
      {
        name: "High Success Rate",
        discription: "Reliable API with 96%+ verification accuracy.",
      },
    ],
    work: [
      {
        image:"https://kashidigitalapis.com/assets/step1-D658MzzE.jpg",
        title: "Input Aadhaar & PAN",
        discription: "The user provides their Aadhaar and PAN details.",
      },
      {
        image:"https://kashidigitalapis.com/assets/step-2-DqIkmqJ4.jpg",
        title: "Cross-Verification",
        discription:
          "The API verifies Aadhaar details against the PAN database.",
      },
      {
        image:"	https://kashidigitalapis.com/assets/step-3-BmP2qlEk.jpg",
        title: "Instant Response",
        discription: "The system returns a match/no-match result in real time.",
      },
    ],
    apiexmaple: `{
  "code": 200,
  "message": "Success",
  "data": {
    "aadhaarNumber": "34XXXXXXX705",
    "panNumber": "XXJPM800XX",
    "message": "Record Found"
  }
}`,
    keyfeature: [
      {
        title: "Real-Time Aadhaar-PAN Linking",
        discription:
          "Ensure instant Aadhaar and PAN authentication for seamless KYC onboarding.",
      },
      {
        title: "Fail-Safe Verification Process",
        discription:
          "Our API intelligently pings multiple servers, ensuring maximum reliability and uptime.",
      },
      {
        title: "Advanced Fraud Detection",
        discription:
          "Minimize identity theft and document fraud with AI-powered verification",
      },
      {
        title: "Quick & Easy Integration",
        discription:
          "RESTful APIs enable smooth integration with any web or mobile application.",
      },
    ],
    usecases: [
      {
        title: "Banking & Financial Services",
        discription:
          "Verify customer identities for seamless account opening and loan processing.",
      },
      {
        title: "Insurance Providers",
        discription: "Authenticate policyholders to prevent fraudulent claims.",
      },
      {
        title: "Fintech & NBFCs",
        discription:
          "Perform digital KYC for credit approvals and wallet onboarding.",
      },
      {
        title: "Telecom & eCommerce",
        discription: "Secure user verification for fraud prevention.",
      },
      {
        title: "Government & Compliance",
        discription: "Ensure Aadhaar-PAN linking for regulatory compliance.",
      },
    ],
  },
  {
    id: "pan-verification",
    category: "Verification API's",
    title: "Verify PAN Card Details Instantly with Kashi Digital APIs",
    titleDis:
      "The Pan Locator API by Kashi Digital APIs enables businesses and financial institutions to instantly verify PAN card details with high accuracy. This KYC (Know Your Customer) verification solution helps streamline user onboarding, fraud prevention, and compliance checks by fetching PAN-related details directly from authorized sources.",
    formimg: "https://kashidigitalapis.com/assets/pan-BQkya33s.jpg",
    name: "PAN Locator",
    imageb: "https://kashidigitalapis.com/assets/pan-locate-D3ehyOQg.jpg",
    features: [
      {
        name: "Fast & Reliable",
        discription: "Get instant PAN verification in real time.",
      },
      {
        name: "Seamless Integration",
        discription: "Plug & play RESTful API for easy implementation.",
      },
      {
        name: "Government-Sourced Data",
        discription: "Access accurate and up-to-date information.",
      },
      {
        name: "Secure & Encrypted",
        discription: "Data privacy and compliance with regulatory standards.",
      },
      {
        name: "Scalable Solution",
        discription:
          "Handles millions of PAN verification requests efficiently.",
      },
    ],
    work: [
      {
        image:"https://kashidigitalapis.com/assets/step1-D658MzzE.jpg",
        title: "Enter PAN Number",
        discription: "The API takes a PAN card number as input.",
      },
      {
        image:"https://kashidigitalapis.com/assets/step-2-DqIkmqJ4.jpg",
        title: "Fetch PAN Details",
        discription:
          "The system retrieves name, date of birth, gender, and father's name.",
      },
      {
        image:"	https://kashidigitalapis.com/assets/step-3-BmP2qlEk.jpg",
        title: "Instant Verification",
        discription:
          "Results are provided in real-time for seamless KYC processing.",
      },
    ],
    apiexmaple: `{
  "code": 200,
  "message": "Success",
  "data": {
    "panNumber": "KXXXXXXXXA",
    "fullName": "AXXXA KHXXXN",
    "name": {
      "firstName": "AXXXA",
      "middleName": "",
      "lastName": "KXXXN"
    },
    "dob": "XXXX-XX-XX",
    "fatherName": "OXXA SXXI",
    "gender": "X"
  }
}`,
    keyfeature: [
      {
        title: "Real-Time PAN Verification",
        discription:
          "Validate PAN details, full name, and date of birth in real time.",
      },
      {
        title: "Fast & Reliable",
        discription:
          "Reduce fraud risks with accurate and verified data retrieval.",
      },
      {
        title: "Secure API Integration",
        discription: "Ensure end-to-end encrypted data transactions.",
      },
      {
        title: "Regulatory Compliance",
        discription: "Helps businesses comply with KYC/AML guidelines.",
      },
    ],
    usecases: [
      {
        title: "Banking & Financial Institutions",
        discription:
          "Validate PAN details before opening a bank account. Check customer details for faster loan approvals.",
      },
      {
        title: "Fintech & Payment Platforms",
        discription:
          "Enable secure transactions by verifying PAN details in e-wallets & UPI payments. Enhance user authentication for fraud prevention.",
      },
      {
        title: "Insurance Providers",
        discription:
          "Perform PAN-based KYC verification for policy issuance. Prevent identity fraud in claims processing.",
      },
      {
        title: "Investment & Stock Market Platforms",
        discription:
          "Verify investor details before allowing trading & stock transactions. Ensure compliance with SEBI regulations and KYC norms.",
      },
      {
        title: "Employment & HR Verification",
        discription:
          "Authenticate employee PAN details during onboarding. Validate salary processing & tax compliance records.",
      },
    ],
  },
  {
    id: "pan-to-father-name",
    category: "Verification API's",
    title: "Verify PAN Card Holder Details Instantly with Pan Verification APIs",
    titleDis:
      "The PAN to Full Name with Father Name API by Kashi Digital APIs enables businesses to instantly fetch a PAN card holder’s father’s name and PAN status for seamless KYC verification, fraud prevention, and compliance checks.",
    formimg: "https://kashidigitalapis.com/assets/pan-BQkya33s.jpg",
    name: "PAN to Father Name",
    imageb: "https://kashidigitalapis.com/assets/pan-locate-D3ehyOQg.jpg",
    features: [
      {
        name: "High Accuracy & Instant Verification",
        discription: "Get real-time PAN verification.",
      },
      {
        name: "Easy Integration",
        discription: "RESTful API for seamless implementation in your system.",
      },
      {
        name: "Reliable & Secure",
        discription: "Encrypted data processing ensures privacy protection.",
      },
      {
        name: "Government-Sourced Data",
        discription: "Accurate and up-to-date information.",
      },
      {
        name: "Scalable & Fast",
        discription: "Handles millions of verification requests efficiently.",
      },
    ],
    work: [
      {
        image:"https://kashidigitalapis.com/assets/step1-D658MzzE.jpg",
        title: "Enter PAN Number",
        discription: "Enter the PAN card number to be verified.",
      },
      {
        image:"https://kashidigitalapis.com/assets/step-2-DqIkmqJ4.jpg",
        title: "Fetch PAN Details",
        discription: "The system retrieves father's name and PAN status.",
      },
      {
        image:"	https://kashidigitalapis.com/assets/step-3-BmP2qlEk.jpg",
        title: "Instant Verification",
        discription: "The API provides real-time validation.",
      },
    ],
    apiexmaple: `{
    "code": 200,
    "message": "Success",
    "data": {
      "status": "success",
      "status_code": 100,
      "message": "ACTIVE",
      "result": {
        "pan": "AMXXXXXX7D",
        "father_name": "SIXXXXXXXXX AMXXXXXXM SAXXXXXXXHG"
      }
    }
  }`,
    keyfeature: [
      {
        title: "Instant PAN Verification",
        discription: "Retrieve PAN status, father's name, and PAN details.",
      },
      {
        title: "Real-Time Response",
        discription: "Get instant results with a high accuracy rate.",
      },
      {
        title: "Secure & Encrypted API",
        discription: "End-to-end data encryption ensures user privacy.",
      },
      {
        title: "Regulatory Compliance",
        discription:
          "Complies with KYC/AML regulations for financial institutions.",
      },
    ],
    usecases: [
      {
        title: "Banking & Financial Institutions",
        discription:
          "Authenticate customer details before account opening. Enable fast and secure KYC verification for loans & credit approvals.",
      },
      {
        title: "Fintech & Digital Payment Platforms",
        discription:
          "Validate PAN details for secure transactions and wallet onboarding. Prevent fraud by verifying the legitimacy of PAN holders.",
      },
      {
        title: "Insurance Companies",
        discription:
          "Ensure identity verification during policy issuance and claims processing.",
      },
      {
        title: "Stock Market & Investment Platforms",
        discription:
          "Verify investor PAN details to comply with SEBI regulations. Enhance fraud detection mechanisms in stock trading.",
      },
      {
        title: "Employment & HR Verification",
        discription:
          "Cross-check PAN details and father's name during employee onboarding. Ensure tax compliance and salary processing verification.",
      },
    ],
  },
  {
    id: "aadhaar-otp-authentication",
    category: "Verification API's",
    title: "Authenticate Aadhaar Details Securely with Kashi Digital APIs",
    titleDis:
      "The Aadhaar with OTP API by Kashi Digital APIs enables businesses to securely verify Aadhaar card details using OTP authentication. This API facilitates seamless KYC verification, fraud prevention, and user authentication while ensuring data security and regulatory compliance.",
      formimg:
      "https://kashidigitalapis.com/assets/link-aadhar-to-pan-wDROFJcv.jpg",
      name: "Aadhaar OTP Authentication",
    imageb: "https://kashidigitalapis.com/assets/aadhaar-verification-CMS7zCta.png",
    features: [
      {
        name: "Secure & Compliant",
        discription:
          "Government-backed Aadhaar verification ensures compliance with UIDAI and KYC regulations.",
      },
      {
        name: "Instant & Reliable",
        discription: "Real-time Aadhaar verification with OTP authentication.",
      },
      {
        name: "Easy API Integration",
        discription: "Seamless implementation with RESTful APIs.",
      },
      {
        name: "Scalable & High Performance",
        discription:
          "Handles millions of Aadhaar verification requests efficiently.",
      },
      {
        name: "Data Privacy Guaranteed",
        discription:
          "Aadhaar details secured with encryption and access control.",
      },
    ],
    work: [
      {
        image:"https://kashidigitalapis.com/assets/step1-D658MzzE.jpg",
        title: "Generate Aadhaar OTP",
        discription:
          "Users enter their Aadhaar number to receive an OTP on their registered mobile number via UIDAI's authentication system.",
      },
      {
        image:"https://kashidigitalapis.com/assets/step-2-DqIkmqJ4.jpg",
        title: "Download Aadhaar Data",
        discription:
          "Upon successful OTP validation, the API provides Aadhaar holder details including name, DOB, gender, address, and verification files.",
      },
    ],
    apiexmaple: [
      {
        title: "Generate Aadhaar OTP Response",
        code: `{
      "code": 200,
      "message": "Success",
      "data": {
        "status": "success",
        "txn_id": "e2764b47-daa0-4bd1-ace5-54648b44137e",
        "status_code": 100,
        "message": "OTP Triggered",
        "result": {
          "aadhaar": "928417#####",
          "request_id": "7C9B070A2F6DF2C0"
        }
      }
    }`,
      },
      {
        title: "Download Aadhaar Data Response",
        code: `{
      "code": 200,
      "message": "Success",
      "data": {
        "status": "success",
        "txn_id": "d82d1b07-1d4c-440e-940d-7bc0542211ff",
        "status_code": 100,
        "message": "success",
        "result": {
          "aadhaar": "928417#####",
          "name": "RXXXi RXXXh BXXXXe",
          "dob": "1XX1-XX-XX",
          "gender": "FXXXE",
          "address_details": {
            "district": "PXXe",
            "state": "MaXXXXXXa",
            "post": "MXXXi",
            "locality": "MXXXi aXXXi rXXd, VaXXXXXXar, DuXXXXXon",
            "pincode": "4XXXX5"
          },
          "zip_file_code": "8XXX4",
          "image_base64": "/9j/4AAQSkZJRgABAgAAAQ...",
          "zip_file": "https://XX-prod.blr1.digitalXXX.com/...",
          "xml_file": "https://XX-prod.blr1.digitalXXX.com/..."
        }
      }
    }`,
      },
    ],
    keyfeature: [
      {
        title: "Two-Step Aadhaar Verification",
        discription:
          "Generate and validate Aadhaar OTP for identity authentication.",
      },
      {
        title: "Real-Time Response",
        discription: "Fetch Aadhaar details instantly upon OTP validation.",
      },
      {
        title: "Secure & Encrypted API",
        discription: "End-to-end encryption ensures data privacy.",
      },
      {
        title: "Regulatory Compliance",
        discription:
          "Complies with UIDAI and KYC norms for identity verification.",
      },
    ],
    usecases: [
      {
        title: "Banking & Financial Institutions",
        discription:
          "Verify Aadhaar details instantly for customer onboarding. Prevent fraud by validating Aadhaar-linked identities.",
      },
      {
        title: "Fintech & Digital Payment Platforms",
        discription:
          "Enable Aadhaar-based KYC for secure transactions. Reduce onboarding friction with fast Aadhaar authentication.",
      },
      {
        title: "Telecom & SIM Card Issuance",
        discription:
          "Use Aadhaar OTP verification for instant SIM activation. Comply with government KYC regulations for mobile users.",
      },
      {
        title: "E-Commerce & Online Services",
        discription:
          "Verify users before enabling cash-on-delivery orders. Enhance customer trust with Aadhaar-linked accounts.",
      },
      {
        title: "Government & Healthcare Services",
        discription:
          "Enable Aadhaar-based authentication for welfare schemes. Validate identity for government-subsidized programs.",
      },
    ],
  },
  {
    id: "rc-details",
    category:"Vehicle Data API's",
    title: "Seamless Vehicle RC Details API Verification & Compliance",
    titleDis:
      "The RC Details API by Kashi Digital APIs provides instant access to official vehicle registration details, helping businesses, financial institutions, and government agenciesverify vehicle data efficiently. Whether you need to authenticate vehicle ownership, check insurance validity, or prevent fraud, our API delivers accurate and real-time vehicle registration data.",
    formimg: "https://kashidigitalapis.com/assets/rc-_axuoKLv.jpg",
    name: "RC Details",
    imageb: "https://kashidigitalapis.com/assets/rc-verify-ScqMRdXG.jpg",
    features: [
      {
        name: "High Accuracy",
        discription: "Reliable vehicle data fetched from trusted sources.",
      },
      {
        name: "Fast Processing",
        discription: "Get results in milliseconds with minimal response time.",
      },
      {
        name: "Scalable API",
        discription: "Supports high-volume requests for enterprise use.",
      },
      {
        name: "Secure & Compliant",
        discription: "Ensures end-to-end encryption and data security.",
      },
      {
        name: "High Success Rate",
        discription: "Reliable API with 96%+ verification accuracy.",
      },
    ],
    work: [
      {
        image:"https://kashidigitalapis.com/assets/step1-D658MzzE.jpg",
        title: "Enter Vehicle Number",
        discription: "Provide the RC number as input.",
      },
      {
        image:"https://kashidigitalapis.com/assets/step-2-DqIkmqJ4.jpg",
        title: "API Fetches Data",
        discription:
          "The system retrieves vehicle details from official databases.",
      },
      {
        image:"	https://kashidigitalapis.com/assets/step-3-BmP2qlEk.jpg",
        title: "Receive Instant Response",
        discription:
          "Get real-time registration details, insurance status, and compliance data.",
      },
    ],
    apiexmaple: `{
        "code": 200,
        "message": "Success",
        "result": {
          "registration": {
            "number": "MHXXXXX75",
            "authority": "RTO SXXXXXR",
            "date": "XX-XXX-XXXX",
            "expiryDate": "XX-XXX-XXXX",
            "owner": {
              "name": "AXXXXXXXXXXXXXH",
              "fatherName": "VXXXXXXM",
              "mobileNumber": "NA",
              "presentAddress": "GAXXXDE WXXXI KXXXI, NXXXH SXXXXR, KXXXI MOB NO 9XXXXXXXXXX6, SXXXXXr, MXXXXXXXXXa, 4XXXXX5",
              "permanentAddress": "GAXXXDE WXXXI KXXXI, NXXXH SXXXXR, KXXXI MOB NO 9XXXXXXXXXX6, SXXXXXr, MXXXXXXXXXa, 4XXXXX5"
            },
            "status": {
              "active": true,
              "updatedOn": "XX-XXX-XXXX"
            },
            "ownerCount": "X"
          },
          "vehicle": {
            "class": "Goods Carrier",
            "manufacturer": "ASHOK LEYLAND LTD",
            "model": "16XXXXXXXXXXXXXXXXXXXXII",
            "color": "AW",
            "fuelType": "DIESEL",
            "normsType": "Not Available",
            "chassis": "MBXXXXXXXXXXXXXXX97",
            "engine": "GXXXXXXXX9",
            "manufacturingYear": 2016,
            "cubicCapacity": 5760,
            "grossWeight": 16200,
            "unladenWeight": 5945,
            "wheelbase": 0,
            "cylinders": 6,
            "seatCapacity": 3,
            "bodyType": "OTHER TANKERS",
            "vehicleSleeperCapacity": 0,
            "vehicleStandingCapacity": 0,
            "category": "HGV",
            "isCommercial": true
          },
          "insurance": {
            "company": "XXXXXXXXXXXXXXXXXXXXXXXXX.",
            "expiryDate": "XX-XXX-XXXX",
            "policyNumber": "16XXXXXXXXXXXXXXXXXX26"
          },
          "pollutionControl": {
            "certificateNumber": "MHXXXXXXXXXXXXXX16",
            "validUpto": "XX-XXX-XXXX"
          },
          "permit": {
            "issuedDate": "XX-XXX-XXXX",
            "number": "MHXXXXXXXXXXX3A",
            "type": "Goods Permit",
            "validFrom": "XX-XXX-XXXX",
            "validUpto": "XX-XXX-XXXX"
          },
          "blacklist": {
            "status": "NA",
            "details": []
          },
          "nationalPermit": {
            "number": "MHXXXXXXXXX3A",
            "validUpto": "XX-XXX-XXXX",
            "issuedBy": "NA"
          },
          "nonUseStatus": {
            "status": null,
            "from": null,
            "to": null
          },
          "finance": {
            "isFinanced": true,
            "rcFinancer": "XXXXXXXXXXXXXXXXXXXX"
          },
          "additionalFlags": {
            "partialData": false,
            "dbResult": false,
            "mmvResponse": null
          }
        }
      }`,
    keyfeature: [
      {
        title: "Instant Vehicle Verification",
        discription:
          "Retrieve registration number, owner details, and vehicle specifications in real time.",
      },
      {
        title: "Fraud Prevention",
        discription:
          "Ensure vehicle legitimacy before processing loans, insurance, or resale transactions.",
      },
      {
        title: "Seamless Integration",
        discription:
          "A RESTful API that integrates easily into your applications, websites, or ERP systems.",
      },
      {
        title: "Regulatory Compliance",
        discription:
          "Stay updated with official government records for accurate vehicle data validation.",
      },
    ],
    usecases: [
      {
        title: "Financial Services & Loan Providers",
        discription:
          "Validate vehicle details before approving loans. Check the ownership history to assess risk.",
      },
      {
        title: "Insurance Companies",
        discription:
          "Verify registration details for policy issuance & renewals. Confirm vehicle PUC and insurance status.",
      },
      {
        title: "Fleet Management & Logistics",
        discription:
          "Authenticate commercial fleet ownership and track vehicle compliance. Reduce risks by verifying details before onboarding a vehicle.",
      },
      {
        title: "Automobile Marketplaces & Dealerships",
        discription:
          "Ensure authenticity of second-hand vehicle sales. Prevent fraud by validating ownership and legal compliance.",
      },
      {
        title: "Government & Law Enforcement Agencies",
        discription:
          "Access vehicle details for traffic violations and legal investigations. Verify permit and pollution status of registered vehicles.",
      },
    ],
  },
  {
    id: "challan-verification",
    category:"Vehicle Data API's",
    title: "Instant e-Challan Verification for Vehicles",
    titleDis:
      "The Challan API by Kashi Digital APIs provides real-time access to traffic violation and penalty records, ensuringseamless e-challan verification for individuals, businesses, and law enforcement agencies. Whether you need to check pending fines, verify a vehicle's challan history, or integrate challan verification into your services, our API delivers accurate and instant results.",
    formimg: "https://kashidigitalapis.com/assets/challan-BWpWXYta.jpg",
    name: "Challan Details",
    imageb: "https://kashidigitalapis.com/assets/challan-verify-CvNbdM6p.jpg",
    features: [
      {
        name: "Fast & Accurate",
        discription: "Access government-sourced challan data in real time.",
      },
      {
        name: "Easy API Integration",
        discription: "Simple REST API for quick and seamless integration.",
      },
      {
        name: "Secure & Reliable",
        discription:
          "Encrypted communication ensures data security and compliance.",
      },
      {
        name: "Scalable for Enterprises",
        discription: "Handles high-volume requests efficiently.",
      },
      {
        name: "High Success Rate",
        discription: "Reliable API with 96%+ verification accuracy.",
      },
    ],
    work: [
      {
        image:"https://kashidigitalapis.com/assets/step1-D658MzzE.jpg",
        title: "Enter Vehicle/DL Number",
        discription: "Provide the RC number or DL number as input.",
      },
      {
        image:"https://kashidigitalapis.com/assets/step-2-DqIkmqJ4.jpg",
        title: "API Fetches Challan Data",
        discription:
          "The system retrieves e-challan details from official databases.",
      },
      {
        image:"	https://kashidigitalapis.com/assets/step-3-BmP2qlEk.jpg",
        title: "Receive Instant Response",
        discription:
          "Get pending challans, payment status, and violation details in real time.",
      },
    ],
    apiexmaple: `{
          "code": 200,
          "message": "Challan Details Found",
          "results": [
            {
              "Accused Name": "John Doe",
              "Vehicle Number": "XX00XX0000",
              "Driving License Number": "N/A",
              "State Code": "XX",
              "Challan Number": "XX123456789012345678",
              "Challan Date & Time": "10th Jan 2024, 10:30 AM",
              "Challan Status": "Pending",
              "Challan Location": "Main Street, City Center, XYZ State, India",
              "Offences": [
                {
                  "Offence ID": 10001,
                  "Offence Description": "Violation of traffic signal (Section 177) - Private Vehicle"
                }
              ]
            }
          ],
          "Total Challans": 1
        }`,
    keyfeature: [
      {
        title: "Real-Time Challan Lookup",
        discription:
          "Fetch pending and resolved challans against a vehicle number or driving license.",
      },
      {
        title: "Legal Compliance & Fraud Prevention",
        discription:
          "Verify traffic violations before processing vehicle purchases, insurance, or loans.",
      },
      {
        title: "Seamless Integration",
        discription:
          "A RESTful API that integrates effortlessly into apps, websites, and enterprise systems.",
      },
      {
        title: "Official Data Source",
        discription:
          "Access government-verified e-challan records for accurate results.",
      },
    ],
    usecases: [
      {
        title: "Financial Institutions & Loan Providers",
        discription:
          "Validate challan history before approving vehicle loans. Assess risk levels based on frequent traffic violations.",
      },
      {
        title: "Insurance Companies",
        discription:
          "Check for pending challans before issuing or renewing policies. Identify high-risk drivers based on traffic violations.",
      },
      {
        title: "Car Rental & Ride-Sharing Platforms",
        discription:
          "Prevent unauthorized usage by monitoring pending fines. Reduce legal risks by ensuring all rental vehicles have a clean record.",
      },
      {
        title: "Fleet Management & Logistics",
        discription:
          "Track challan status for commercial fleets to ensure legal compliance. Improve driver accountability and compliance with road safety norms.",
      },
      {
        title: "Government & Law Enforcement Agencies",
        discription:
          "Verify challan details in real-time for better enforcement. Provide instant access to outstanding traffic fines for faster resolution.",
      },
    ],
  },
  {
    id: "gst-verification",
    category:"gst verification",
    title: "Verify GST Details Instantly with GST Verification APIs",
    titleDis:
      "The GST Verification API by Kashi Digital APIs enables businesses to validate GSTIN (Goods and Services Tax Identification Number) details in real-time. This API helps organizations ensure compliance, prevent fraud, and streamline business verification processes.",
    formimg: "https://kashidigitalapis.com/assets/gst-unfbFrLx.jpg",
    name: "GST Verification",
    imageb: "https://kashidigitalapis.com/assets/gst-verify-qepYyN8c.jpeg",
    features: [
      {
        name: "100% Reliable",
        discription: "Fetches data directly from government sources.",
      },
      {
        name: "Easy API Integration",
        discription: "Simple REST API for quick and seamless integration.",
      },
      {
        name: "Instant Response",
        discription: "Verify GST details within seconds.",
      },
      {
        name: "Data Security & Compliance",
        discription: "Encrypted data exchange ensures privacy.",
      },
      {
        name: "Scalable & High Performance",
        discription: "Handles millions of requests efficiently.",
      },
    ],
    work: [
      {
        image:"https://kashidigitalapis.com/assets/step1-D658MzzE.jpg",
        title: "Enter GSTIN",
        discription: "The user provides a 15-digit GST identification number.",
      },
      {
        image:"https://kashidigitalapis.com/assets/step-2-DqIkmqJ4.jpg",
        title: "API Validation",
        discription: "The API fetches details from the official GST database.",
      },
      {
        image:"	https://kashidigitalapis.com/assets/step-3-BmP2qlEk.jpg",
        title: "Response Generated",
        discription:
          "Business details like legal name, status, and GSTIN validation result are returned.",
      },
    ],
    apiexmaple: `{
            "code": 200,
            "message": "Success",
            "data": {
              "status": "Success",
              "message": "GSTIN Found",
              "GSTIN": "33AAACXXXXXR4ZP",
              "result": {
                "legal_name": "TXXXXA COXXXXXCY SDXXXXXKS LIXXXXD",
                "trade_name": "",
                "registration_date": "XX-XX-XXXX",
                "status": "Active",
                "business_type": "Private Limited Company",
                "state_jurisdiction": "RANGE-XX",
                "center_jurisdiction": "COMMISSIONERATE-XX",
                "taxpayer_type": "Regular",
                "last_updated": "XX-XX-XXXX"
              }
            }
          }`,
    keyfeature: [
      {
        title: "Real-Time GSTIN Verification",
        discription: "Instantly retrieve business details using GSTIN.",
      },
      {
        title: "Accurate & Reliable Data",
        discription: "Fetches data directly from government sources.",
      },
      {
        title: "Fraud Prevention",
        discription: "Helps identify fraudulent or invalid GSTINs.",
      },
      {
        title: "Regulatory Compliance",
        discription: "Ensures businesses comply with tax and legal norms.",
      },
    ],
    usecases: [
      {
        title: "E-Commerce & Marketplace Platforms",
        discription:
          "Verify seller GST details before onboarding. Ensure compliance with tax regulations.",
      },
      {
        title: "Banking & Financial Services",
        discription:
          "Validate GST information for business loan applications. Prevent fraudulent transactions using fake GST numbers.",
      },
      {
        title: "Logistics & Supply Chain Management",
        discription:
          "Verify GST details of transporters and vendors. Ensure GST compliance for invoicing and taxation.",
      },
      {
        title: "Enterprise & B2B Solutions",
        discription:
          "Automate business verification during vendor onboarding. Reduce manual errors in GST-based authentication.",
      },
    ],
  },
];
