import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

// The 3-Layer platform architecture data
const platformLayers = [
  {
    layerNumber: 1,
    layerSubtitle: "THE PRODUCT CO-PILOT",
    title: "Contract Intelligence Core",
    description: "From risk discovery during bidding to obligation tracking during execution and ultimate defense during claim generation, Alfred's co-pilot models run through the entire project life cycle.",
    badge: "Enterprise Class AI",
    id: "intelligence-core",
    themeColor: "#FFC20E", // Yellow
    badgeStyle: "border-[#FFC20E]/40 text-[#B88500] bg-[#FFF6D6]",
    capabilities: [
      {
        id: "bid-risk",
        title: "BID RISK ANALYSIS",
        desc: "Scans tenders for risky payment rules, spec mismatches & penalty schedules.",
        icon: (
          <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        ),
        inspectorTitle: "ALFRED TENDER INSPECTOR · ACTIVE ANALYSIS",
        inspectorBadge: "CPWD GCC matched",
        badgeStyle: "border-[#FFC20E]/40 text-[#B88500] bg-[#FFF6D6]",
        extractTitle: "TENDER PDF EXTRACT (TECHNICAL SPECS, SEC 12.3)",
        extractText: `"...Contractor is responsible for dynamic testing regimes of all structural components. Tests must be executed by approved Third-Party labs and submitted within 7 days. Pricing for tests is deemed included in general overhead items..."`,
        alertTitle: "Onerous Risk Flagged: Buried Testing Overheads",
        alertText: "Section 12.3 shifts the entire financial burden of third-party test coordination to general overheads instead of custom BOQ line items. Under standard CPWD clauses, this usually incurs ₹40 Lakhs - ₹1.5 Cr in unpriced testing costs.",
        alertType: "warning",
        actionTextLeft: "Drafted pre-bid queries available",
        actionTextRight: "Copy Pre-Bid Query →",
        groundingLeft: "Grounding: Fed on FIDIC & contract-administration logs",
        groundingRight: "Human confirmation is strictly required"
      },
      {
        id: "handoff",
        title: "BID-TO-EXECUTION HANDOFF",
        desc: "Propagates pre-bid risk mitigations directly into live operational trackers.",
        icon: (
          <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 7.89" />
          </svg>
        ),
        inspectorTitle: "ALFRED DATA FLOW PIPELINE · TRANSFER COMPLETED",
        inspectorBadge: "System Sync",
        badgeStyle: "border-[#2B5F96]/30 text-[#2B5F96] bg-[#E3F2FD]",
        extractTitle: "MITIGATION PLAN (ESTIMATING DEPT, WIN-STAGE)",
        extractText: `"Integrate Custom Line Item #920 (Sub-soil regimes) directly into baseline risk register. Auto-flag CPWD Cl 12.3 to field superintendent on site-mobilization."`,
        alertTitle: "Pre-Bid Mitigations Transferred Successfully",
        alertText: "Alfred successfully mapped CPWD Sec 12.3 to active site checklists. The field scheduler has been notified to check compliance before concrete pouring.",
        alertType: "success",
        actionTextLeft: "Active operational tracker: Cl 12.3 Checklist",
        actionTextRight: "View Checklist in Staging →",
        groundingLeft: "Grounding: Linked from Estimating Database to Field Ops",
        groundingRight: "Human confirmation is strictly required"
      },
      {
        id: "obligation",
        title: "OBLIGATION & NOTICE TRACKING",
        desc: "Links daily site progress with contract deadlines to trigger early warnings.",
        icon: (
          <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        ),
        inspectorTitle: "ALFRED OBLIGATION MONITOR · COUNTDOWN ACTIVE",
        inspectorBadge: "FIDIC Clause 20.1",
        badgeStyle: "border-[#D32F2F]/30 text-[#D32F2F] bg-[#FFF0F0]",
        extractTitle: "CONTRACT OBLIGATION MONITOR (FIDIC CL. 20.1)",
        extractText: `"If the Contractor fails to give notice of a claim within such period of 28 days, the Time for Completion shall not be extended, the Contractor shall not be entitled to additional payment..."`,
        alertTitle: "Onerous Risk Flagged: Silent Delay Detected",
        alertText: "Rainfall log on Day 12 reports concrete works halted, but no notice of claim has been drafted. Only 18 days left in the 28-day notice window before time-bar.",
        alertType: "warning",
        actionTextLeft: "Draft notice of claim generated",
        actionTextRight: "Review Draft Notice →",
        groundingLeft: "Grounding: Fed on daily site progress logs & FIDIC Cl. 20.1",
        groundingRight: "Human confirmation is strictly required"
      },
      {
        id: "schedule",
        title: "INDEPENDENT SCHEDULE MONITORING",
        desc: "Track schedules independently and against contracts with P6 or our native lite site-update app.",
        icon: (
          <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        inspectorTitle: "ALFRED SCHEDULE COMPARATOR · WBS CHECK",
        inspectorBadge: "Primavera P6 Live",
        badgeStyle: "border-[#2B5F96]/30 text-[#2B5F96] bg-[#E3F2FD]",
        extractTitle: "WBS & CRITICAL PATH INTEGRITY",
        extractText: `"Primavera P6 baseline schedule shows Activity ID ACT-102 (Excavation) delay of 14 days. Linked obligation: Clause 8.4 Extension of Time entitlement check."`,
        alertTitle: "Schedule Impact Verified: Critical Path Delay",
        alertText: "Excavation delay pushes downstream foundation work by 12 days. Alfred recommends filing an EOT claim based on delayed site hand-over from owner.",
        alertType: "info",
        actionTextLeft: "EOT claim support dossier ready",
        actionTextRight: "View Schedule Impact →",
        groundingLeft: "Grounding: Verified against Primavera P6 & Daily Site Reports",
        groundingRight: "Human confirmation is strictly required"
      },
      {
        id: "drafting",
        title: "DRAFTING AGENTS",
        desc: "Compiles formal contract letters, EOT requests, and cost notices with full citations.",
        icon: (
          <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        ),
        inspectorTitle: "ALFRED CLAIMS BUILDER · WRITING COMPLETE",
        inspectorBadge: "Notice Ready",
        badgeStyle: "border-[#145C35]/30 text-[#145C35] bg-[#E4F3EC]",
        extractTitle: "AUTOMATED CLAIM CORRESPONDENCE DRAFT",
        extractText: `"Subject: Notice of Claim under FIDIC Red Book Clause 20.1 - Extension of Time for Clay Excavation. Under Instruction Ref: INS-029..."`,
        alertTitle: "Draft Notice Compiled & Ready for Review",
        alertText: "Notice of claim compiled with exact dates, instruction letters, and rain gauge records attached. Ready for commercial director sign-off.",
        alertType: "success",
        actionTextLeft: "Download DOCX format available",
        actionTextRight: "Send to Owner Rep →",
        groundingLeft: "Grounding: Fed on FIDIC contract & authenticated site events",
        groundingRight: "Human confirmation is strictly required"
      }
    ]
  },
  {
    layerNumber: 2,
    layerSubtitle: "CONTEXT MODEL",
    title: "Project Context Workspace",
    description: "Operationalises the project's entire knowledge graph — contracts, specification sheets, drawings, schedule, standard codes, daily progress reports (DPRs), and safety checklists — into a structured semantic model. Securely versioned, governed, and role-gated.",
    badge: "Operational Knowledge Graph",
    id: "context-workspace",
    themeColor: "#2B5F96", // Blue
    badgeStyle: "border-[#FFC20E]/40 text-[#B88500] bg-[#FFF6D6]"
  },
  {
    layerNumber: 3,
    layerSubtitle: "THE INPUT UTILITIES",
    title: "Data Ingestion Utilities",
    description: "Utilities that easily parse and ingest messy physical data—scanned PDFs, handwritten daily logs, and massive drawings.",
    badge: "Scanners & Parsers",
    id: "ingestion-utilities",
    themeColor: "#145C35", // Green
    badgeStyle: "border-[#145C35]/30 text-[#145C35] bg-[#E4F3EC]",
    capabilities: [
      {
        id: "ocr-scanner",
        title: "OCR PDF SCANNER",
        desc: "Converts non-searchable scanned contracts and PDFs into clean text.",
        icon: (
          <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2a2 2 0 002-2v-5a2 2 0 00-2-2l-2 .005L12 3 6 8.005 4 8a2 2 0 00-2 2v5a2 2 0 002 2h2m10 0v4a2 2 0 01-2 2h-4a2 2 0 01-2-2v-4m10 0H6" />
          </svg>
        ),
        inspectorTitle: "ALFRED OCR ENGINE · SCANNING ACTIVE",
        inspectorBadge: "99.8% Conf",
        badgeStyle: "border-[#145C35]/30 text-[#145C35] bg-[#E4F3EC]",
        extractTitle: "SCANNED CONTRACT OCR ENGINE",
        extractText: `"Processing page 142... Text recovered: 'The Contractor shall pay Liquidated Damages to the Employer in the amount stated in the Contract Data...'"`,
        alertTitle: "Scanned Document Converted",
        alertText: "Messy physical scan successfully parsed and indexed in Ask Alfred database. Formatted tables extracted.",
        alertType: "success",
        actionTextLeft: "Searchable text ready",
        actionTextRight: "Open in Ask Alfred →",
        groundingLeft: "Grounding: Custom layout-aware OCR parser",
        groundingRight: "Human confirmation is strictly required"
      },
      {
        id: "log-ocr",
        title: "DAILY LOG OCR",
        desc: "Reads hand-written site logs, DPRs, and delivery challans.",
        icon: (
          <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        ),
        inspectorTitle: "ALFRED HANDWRITTEN PARSER · DPR SYNC",
        inspectorBadge: "Image Ingest",
        badgeStyle: "border-[#FFC20E]/40 text-[#B88500] bg-[#FFF6D6]",
        extractTitle: "HANDWRITTEN SITE LOG READER",
        extractText: `"Processing DPR image... OCR parsed text: 'Excavator EX-01 idle for 4 hours. Access path flooded. Site engineer: R. Sharma.'"`,
        alertTitle: "Daily Progress Report Indexed",
        alertText: "Handwritten DPR parsed. Logged rain delay event as potential claim evidence for Clause 8.4.",
        alertType: "warning",
        actionTextLeft: "Rain event flagged for claims department",
        actionTextRight: "Review DPR Image →",
        groundingLeft: "Grounding: Advanced handwriting translation model",
        groundingRight: "Human confirmation is strictly required"
      },
      {
        id: "drawing-metadata",
        title: "DRAWING METADATA EXTRACTOR",
        desc: "Extracts titles, dates, revisions, and revision clouds from PDFs.",
        icon: (
          <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        ),
        inspectorTitle: "ALFRED DRAWING PARSER · CAD INDEX",
        inspectorBadge: "Drawing Ingest",
        badgeStyle: "border-[#2B5F96]/30 text-[#2B5F96] bg-[#E3F2FD]",
        extractTitle: "DRAWING REVISION PARSER",
        extractText: `"Processing file: Pier_Structure_Rev2.pdf... Detected title: 'PIER DETAILS'. Revision code: Rev B. Changes: Foundation width."`,
        alertTitle: "Drawing Revision Detected & Quantified",
        alertText: "Alfred matches Rev B changes to BOQ quantities. Increased volume of steel by 12% detected.",
        alertType: "info",
        actionTextLeft: "BOQ mismatch calculated",
        actionTextRight: "View Drawing Mismatch →",
        groundingLeft: "Grounding: Spatial analysis and metadata parsing engine",
        groundingRight: "Human confirmation is strictly required"
      },
      {
        id: "p6-parser",
        title: "P6 SCHEDULE PARSER",
        desc: "Reads P6 xer files directly and maps schedule activities to clauses.",
        icon: (
          <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        ),
        inspectorTitle: "ALFRED XER LOADER · SCHEDULE SYNC",
        inspectorBadge: "XER Matched",
        badgeStyle: "border-[#145C35]/30 text-[#145C35] bg-[#E4F3EC]",
        extractTitle: "PRIMAVERA P6 XER PARSER",
        extractText: `"Ingested project schedule.xer. Activities: 412. Baseline: BL-1. Critical path activities: 88. Mapped clauses: 24."`,
        alertTitle: "P6 Baseline Schedule Ingested",
        alertText: "Alfred successfully mapped activities to contract clauses and notice countdowns.",
        alertType: "success",
        actionTextLeft: "Activities mapped successfully",
        actionTextRight: "View Schedule Map →",
        groundingLeft: "Grounding: Primavera schema translator",
        groundingRight: "Human confirmation is strictly required"
      }
    ]
  }
]

// The Custom Interactive Layer 2 Semantic Relationship Map Console Component
function Layer2Console({ layer }) {
  const [selectedNode, setSelectedNode] = useState("fidic-20-1")

  const nodes = [
    {
      id: "drw-042",
      label: "Drawing DRW-042",
      type: "node",
      x: "24%",
      y: "22%",
      category: "PHYSICAL PLAN",
      title: "Drawing DRW-042 (Revised Foundation Layout)",
      desc: "Approved construction drawings for the sub-soil foundations of Sector 4. Delivered to site late on Day 10, triggering physical works suspension.",
      connected: ["DPR-120", "DRW-042", "Delay-Alert-101", "schedule-thresholds"],
      footer: "Alfred automatically associates drawings with their corresponding contract clauses and daily reports.",
      icon: (
        <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      id: "fidic-20-1",
      label: "FIDIC Clause 20.1",
      type: "spine", // Gold styling
      x: "50%",
      y: "48%",
      category: "CONTRACTUAL SPINE",
      title: "FIDIC GCC Clause 20.1 (Notice of Claim)",
      desc: "Contractor must give notice of any claim within 28 days of becoming aware of the event. Failure to notify times out the entitlement permanently.",
      connected: ["DPR-120", "DRW-042", "Delay-Alert-101", "schedule-thresholds"],
      footer: "Alfred maps unstructured data into concrete relationships so legal teams don't search blindly.",
      icon: (
        <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z" />
        </svg>
      )
    },
    {
      id: "delay-101",
      label: "Delay Alert #101",
      type: "node",
      x: "76%",
      y: "40%",
      category: "AI RISK WARNING",
      title: "Delay Alert #101 (Notice Time-Bar Warning)",
      desc: "Auto-generated warning trigger. 18 days remaining in the Clause 20.1 notice window. Lack of notification will forfeit the EOT claim.",
      connected: ["DPR-120", "DRW-042", "Delay-Alert-101", "schedule-thresholds"],
      footer: "Alfred prevents value leakage by highlighting active contractual clock expirations.",
      icon: (
        <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      )
    },
    {
      id: "dpr-120",
      label: "Daily Site Log #120",
      type: "node",
      x: "28%",
      y: "80%",
      category: "SITE PROGRESS DATA",
      title: "Daily Site Log #120 (Concrete Work Halted)",
      desc: "Daily progress report entered by superintendent: \"Pier concrete works suspended on Sector 4 pending late drawing DRW-042 foundation check.\"",
      connected: ["DPR-120", "DRW-042", "Delay-Alert-101", "schedule-thresholds"],
      footer: "Alfred parses natural text daily logs and maps them back to active contract obligations.",
      icon: (
        <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: "setup-ontology",
      label: "Setup: Schedule & Rules",
      type: "node",
      x: "70%",
      y: "80%",
      category: "SYSTEM DATABASE",
      title: "Setup: Schedule & Rules Integration",
      desc: "The baseline structure linking schedule activity IDs (ACT-102) with standard contract templates (FIDIC Red Book) and physical construction rules.",
      connected: ["DPR-120", "DRW-042", "Delay-Alert-101", "schedule-thresholds"],
      footer: "A single living ontology connects schedule nodes to legal rules, protecting your margin.",
      icon: (
        <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      )
    }
  ]

  const activeNode = nodes.find(n => n.id === selectedNode) || nodes[1]

  return (
    <div className="bg-white border border-[#DDDDE6] rounded-[2rem] shadow-sm text-left relative overflow-hidden w-full">
      {/* 1. Header Bar: Icon, Title, Subtitle, and Badge */}
      <div className="px-8 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left w-full">
        <div className="flex items-center gap-3">
          {/* Blue drum icon wrapper */}
          <div className="w-10 h-10 rounded-xl bg-white border border-[#DDDDE6] flex items-center justify-center shadow-sm shrink-0 text-[#2B5F96]">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
          </div>
          <div>
            <span className="text-[10px] font-mono text-[#8B8B94] uppercase tracking-wider font-bold block leading-none mb-1">
              LAYER 2 · CONTEXT MODEL
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-[#1A3A5C] m-0 leading-tight">
              Project Context Workspace
            </h3>
          </div>
        </div>
        <div className="border border-[#DDDDE6] text-[#5A5A62] bg-[#F4F4F7] text-[10px] font-mono font-bold tracking-wider px-3.5 py-1 rounded shadow-sm select-none w-fit shrink-0 sm:self-center">
          Operational Knowledge Graph
        </div>
      </div>

      {/* Horizontal Divider Line */}
      <hr className="border-t border-[#DDDDE6] m-0 p-0" />

      {/* 2. Description Section */}
      <div className="px-8 py-5">
        <p className="text-left text-[#5A5A62] text-[13px] leading-relaxed max-w-4xl m-0 font-normal">
          {layer.description}
        </p>
      </div>

      {/* Horizontal Divider Line */}
      <hr className="border-t border-[#DDDDE6] m-0 p-0" />

      {/* 3. Bottom Section: Clean wrapper containing map & details */}
      <div className="p-6 bg-white border-t border-[#DDDDE6]">
        <div className="bg-white border border-[#DDDDE6] rounded-[2rem] p-6 shadow-sm w-full">
          <div className="flex flex-col lg:flex-row gap-6 w-full">
          {/* Left panel - Semantic Relationship Map (White Card) */}
          <div className="w-full lg:w-[60%] bg-white border border-[#DDDDE6] rounded-[1.5rem] p-5 sm:p-6 flex flex-col justify-between relative min-h-[370px] overflow-hidden select-none shadow-sm">
            <span className="text-[9px] font-mono text-[#6B6B74] uppercase tracking-widest font-bold block mb-1 z-10">
              SEMANTIC RELATIONSHIP MAP (CLICK ANY NODE TO INSPECT)
            </span>

            {/* Canvas area containing nodes and connections */}
            <div className="absolute inset-0 w-full h-full z-0 pointer-events-auto">
              {/* SVG Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {/* Highlighted connection lines linked to selectedNode */}
                {/* drw-042 <-> fidic-20-1 */}
                <line
                  x1="24%" y1="22%" x2="50%" y2="48%"
                  stroke={selectedNode === "drw-042" || selectedNode === "fidic-20-1" ? "#2B5F96" : "#D2D2D9"}
                  strokeWidth={selectedNode === "drw-042" || selectedNode === "fidic-20-1" ? "1.8" : "1.2"}
                  strokeDasharray={selectedNode === "drw-042" || selectedNode === "fidic-20-1" ? "4 4" : "0"}
                  className="transition-all duration-300"
                />
                {/* dpr-120 <-> fidic-20-1 */}
                <line
                  x1="28%" y1="80%" x2="50%" y2="48%"
                  stroke={selectedNode === "dpr-120" || selectedNode === "fidic-20-1" ? "#2B5F96" : "#D2D2D9"}
                  strokeWidth={selectedNode === "dpr-120" || selectedNode === "fidic-20-1" ? "1.8" : "1.2"}
                  strokeDasharray={selectedNode === "dpr-120" || selectedNode === "fidic-20-1" ? "4 4" : "0"}
                  className="transition-all duration-300"
                />
                {/* setup-ontology <-> fidic-20-1 */}
                <line
                  x1="70%" y1="80%" x2="50%" y2="48%"
                  stroke={selectedNode === "setup-ontology" || selectedNode === "fidic-20-1" ? "#2B5F96" : "#D2D2D9"}
                  strokeWidth={selectedNode === "setup-ontology" || selectedNode === "fidic-20-1" ? "1.8" : "1.2"}
                  strokeDasharray={selectedNode === "setup-ontology" || selectedNode === "fidic-20-1" ? "4 4" : "0"}
                  className="transition-all duration-300"
                />
                {/* delay-101 <-> fidic-20-1 */}
                <line
                  x1="76%" y1="40%" x2="50%" y2="48%"
                  stroke={selectedNode === "delay-101" || selectedNode === "fidic-20-1" ? "#2B5F96" : "#D2D2D9"}
                  strokeWidth={selectedNode === "delay-101" || selectedNode === "fidic-20-1" ? "1.8" : "1.2"}
                  strokeDasharray={selectedNode === "delay-101" || selectedNode === "fidic-20-1" ? "4 4" : "0"}
                  className="transition-all duration-300"
                />

                {/* Auxiliary faint lines */}
                <line x1="24%" y1="22%" x2="28%" y2="80%" stroke="#E5E7EB" strokeWidth="1" className="opacity-80" />
                <line x1="76%" y1="40%" x2="70%" y2="80%" stroke="#E5E7EB" strokeWidth="1" className="opacity-80" />
                <line x1="28%" y1="80%" x2="70%" y2="80%" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="3 3" className="opacity-70" />
              </svg>

              {/* Nodes */}
              {nodes.map((node) => {
                const active = selectedNode === node.id
                const isSpine = node.type === 'spine'
                if (isSpine) {
                  return (
                    <div
                      key={node.id}
                      className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 px-3 py-2 rounded-lg border-2 border-[#FFC20E] text-[11px] font-semibold shadow-md select-none transition-all duration-300 z-10 bg-[#2B5F96] text-white scale-[1.03]"
                      style={{ left: node.x, top: node.y }}
                    >
                      <div className="shrink-0 text-white">
                        {node.icon}
                      </div>
                      <span>{node.label}</span>
                    </div>
                  )
                }
                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNode(node.id)}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 px-3 py-2 rounded-lg border text-[11px] font-semibold shadow-sm cursor-pointer select-none transition-all duration-300 z-10 outline-none ${
                      active
                        ? 'bg-[#1A3A5C] border-[#1A3A5C] text-white scale-[1.03] shadow-md'
                        : 'bg-white border-[#DDDDE6] text-[#3A3A3F] hover:border-[#1A3A5C]/40 hover:bg-[#F8F8FA]'
                    }`}
                    style={{ left: node.x, top: node.y }}
                  >
                    <div className={`shrink-0 ${active ? 'text-white' : 'text-[#6B6B74]'}`}>
                      {node.icon}
                    </div>
                    <span>{node.label}</span>
                  </button>
                )
              })}
            </div>

            <span className="text-[10px] text-[#8B8B94] italic block mt-auto z-10 leading-none">
              ⓘ Click nodes on the map to explore relationship traces.
            </span>
          </div>

          {/* Right panel - Node Details Pane (White Card) */}
          <div className="w-full lg:w-[40%] bg-white border border-[#DDDDE6] rounded-[1.5rem] p-5 sm:p-6 flex flex-col justify-between text-left relative min-h-[370px] shadow-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeNode.id}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col h-full justify-between gap-6"
              >
                <div>
                  {/* Header */}
                  <div className="border-b border-[#DDDDE6]/50 pb-3.5 mb-4">
                    <span className="text-[9px] font-mono text-[#B88500] tracking-widest uppercase font-bold block mb-1">
                      {activeNode.category}
                    </span>
                    <h4 className="text-base font-bold text-[#1A3A5C] m-0">
                      {activeNode.title}
                    </h4>
                  </div>

                  {/* Body Text */}
                  <p className="text-xs sm:text-[13px] leading-relaxed text-[#5A5A62] m-0 font-normal">
                    {activeNode.desc}
                  </p>

                  {/* Connected Elements list */}
                  <div className="mt-6">
                    <span className="text-[9px] font-mono text-[#6B6B74] tracking-widest uppercase font-bold block mb-2.5">
                      CONNECTED ELEMENTS:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {activeNode.connected.map((item, idx) => (
                        <span
                          key={idx}
                          className="bg-[#F8F8FA] border border-[#DDDDE6] text-[#5A5A62] text-[10px] font-mono px-2 py-1 rounded"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Details Footer */}
                <div className="text-[11px] leading-relaxed text-[#6B6B74] border-t border-[#DDDDE6]/50 pt-4 mt-6">
                  {activeNode.footer}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

// Data structures for Layer 3 Console
const docuhubFolders = [
  {
    id: "tenders",
    label: "Tenders & Pre-Bids",
    filesCount: "14 files",
    category: "STANDALONE DOCUMENT MANAGEMENT",
    title: "DocuHub is built for teams without a structured DMS",
    desc: "If your project teams do not have a pre-existing enterprise DMS like Oracle Aconex, Alfred provides DocuHub. It acts as an out-of-the-box construction-optimized file repository with built-in automatic OCR scanning, schema-guided folder placement, and continuous obligation extraction.",
    recentUploads: [
      { name: "Tender_Specs_Sec_IV.pdf", status: "Parsed" },
      { name: "Pier_Concrete_DPR.xlsx", status: "Synced" }
    ],
    ctaText: "Explore DocuHub features →"
  },
  {
    id: "drawings",
    label: "Structural Drawings",
    filesCount: "82 files",
    category: "DRAWING MANAGEMENT & PARSING",
    title: "Automated drawing parsing & BOQ mapping",
    desc: "Upload complex construction blueprints and drawings directly to DocuHub. Alfred's specialized visual parser automatically extracts revisions, cloud markups, and coordinates, mapping changes to the bill of quantities.",
    recentUploads: [
      { name: "Foundation_Layout_Rev4.pdf", status: "Processed" },
      { name: "Sewer_Line_Alignment.dwg", status: "Indexed" }
    ],
    ctaText: "Explore Drawing features →"
  },
  {
    id: "dprs",
    label: "Daily Site Progress (DPRs)",
    filesCount: "234 files",
    category: "SITE REPORT OCR & EXTRACTION",
    title: "Structured intelligence from messy site logs",
    desc: "DocuHub processes site reports, daily progress summaries (DPRs), and handwritten operator logs. It checks for references to weather delays, machine downtime, or resource blockages and maps them to notice windows.",
    recentUploads: [
      { name: "Superintendent_DPR_D42.jpg", status: "OCR Completed" },
      { name: "Rain_Gauge_Log_June.xlsx", status: "Analyzed" }
    ],
    ctaText: "Explore DPR extraction →"
  },
  {
    id: "letters",
    label: "Contract Letters & Corresp.",
    filesCount: "112 files",
    category: "FORMAL NOTICE TRACKING",
    title: "Complete outgoing and incoming notice history",
    desc: "Track every piece of formal communication. Alfred links client instructions, EOT requests, and cost notices to relevant contract clauses, highlighting unanswered letters and impending notice deadlines.",
    recentUploads: [
      { name: "Notice_of_Delay_Ref102.pdf", status: "Parsed" },
      { name: "EOT_Claim_Draft_v2.docx", status: "Generated" }
    ],
    ctaText: "Explore Claims drafting →"
  }
]

// The Custom Interactive Layer 3 DocuHub vs Enterprise Integrations Console Component
function Layer3Console({ layer }) {
  const [activeMainTab, setActiveMainTab] = useState("docuhub") // "docuhub" or "integrations"
  const [activeFolder, setActiveFolder] = useState("tenders")

  const currentFolder = docuhubFolders.find(f => f.id === activeFolder) || docuhubFolders[0]

  return (
    <div className="bg-white border border-[#DDDDE6] rounded-[2rem] shadow-sm text-left relative overflow-hidden w-full">
      {/* 1. Header Bar: Icon, Title, Subtitle, and Badge */}
      <div className="px-8 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left w-full">
        <div className="flex items-center gap-3">
          {/* Green code icon wrapper */}
          <div className="w-10 h-10 rounded-xl bg-white border border-[#DDDDE6] flex items-center justify-center shadow-sm shrink-0 text-[#145C35]">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <div>
            <span className="text-[10px] font-mono text-[#8B8B94] uppercase tracking-wider font-bold block leading-none mb-1">
              LAYER 3 · INTEGRATION & DATA INGESTION
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-[#1A3A5C] m-0 leading-tight">
              Integration Utilities & DocuHub
            </h3>
          </div>
        </div>
        <div className="border border-[#145C35]/30 text-[#145C35] bg-[#E4F3EC] text-[10px] font-mono font-bold tracking-wider px-3.5 py-1 rounded-full uppercase shadow-sm select-none w-fit shrink-0 sm:self-center">
          Flexible Deployments
        </div>
      </div>

      {/* Horizontal Divider Line */}
      <hr className="border-t border-[#DDDDE6] m-0 p-0" />

      {/* 2. Description Section */}
      <div className="px-8 py-5">
        <p className="text-left text-[#5A5A62] text-[13px] leading-relaxed max-w-4xl m-0 font-normal">
          How do you feed data to Alfred? We provide two architectural models: standard integration with your existing enterprise systems (like Oracle Aconex, SharePoint, and Primavera P6), or use Alfred's own DocuHub — a standalone document management system custom-built for large-scale construction.
        </p>
      </div>

      {/* Horizontal Divider Line */}
      <hr className="border-t border-[#DDDDE6] m-0 p-0" />

      {/* 3. Bottom Section: Centered Toggle & Split Console */}
      <div className="p-6 bg-[#F8F9FA]/40 border-t border-[#DDDDE6]">
        {/* Center segmented toggle container */}
        <div className="flex justify-center mb-6">
          <div className="bg-[#EAEBEF]/60 border border-[#DDDDE6]/50 p-1.5 rounded-2xl flex gap-2">
            <button
              onClick={() => setActiveMainTab("docuhub")}
              className={`px-6 py-3 text-xs font-mono tracking-wide rounded-xl transition-all duration-300 cursor-pointer ${
                activeMainTab === "docuhub"
                  ? "bg-white text-[#1A3A5C] border border-[#C8C8D3] shadow-sm font-extrabold"
                  : "text-[#3A3A3F] hover:text-[#1A3A5C] border border-transparent font-bold"
              }`}
            >
              STANDALONE DMS (ALFRED DOCUHUB)
            </button>
            <button
              onClick={() => setActiveMainTab("integrations")}
              className={`px-6 py-3 text-xs font-mono tracking-wide rounded-xl transition-all duration-300 cursor-pointer ${
                activeMainTab === "integrations"
                  ? "bg-white text-[#1A3A5C] border border-[#C8C8D3] shadow-sm font-extrabold"
                  : "text-[#3A3A3F] hover:text-[#1A3A5C] border border-transparent font-bold"
              }`}
            >
              THIRD-PARTY INTEGRATIONS (ACONEX/P6)
            </button>
          </div>
        </div>

        {/* Console layout inside a clean border box split by vertical divider */}
        <div className="bg-white border border-[#DDDDE6] rounded-[1.5rem] shadow-sm w-full overflow-hidden">
        {activeMainTab === "docuhub" ? (
          /* DocuHub Layout */
          <div className="flex flex-col lg:flex-row w-full">
            {/* Left Column: Alfred DocuHub Explorer */}
            <div className="w-full lg:w-[35%] border-b lg:border-b-0 lg:border-r border-[#DDDDE6] p-5 sm:p-6 flex flex-col gap-3 text-left">
              <div className="flex justify-between items-center pb-2 border-b border-[#DDDDE6]/50 mb-2">
                <span className="text-[9px] font-mono text-[#6B6B74] uppercase tracking-widest font-bold">
                  ALFRED DOCUHUB EXPLORER
                </span>
                <span className="text-[8px] font-mono font-bold tracking-wider px-2 py-0.5 rounded text-[#145C35] bg-[#E4F3EC] border border-[#145C35]/30">
                  DMS Mode
                </span>
              </div>
              <div className="flex flex-col gap-2">
                {docuhubFolders.map((folder) => {
                  const active = activeFolder === folder.id
                  return (
                    <button
                      key={folder.id}
                      onClick={() => setActiveFolder(folder.id)}
                      className={`w-full flex items-center justify-between p-2.5 sm:p-3 rounded-xl border transition-all duration-200 text-left cursor-pointer ${active
                        ? "bg-[#FFF9E6] border-[#FFC20E]/40 text-[#1A3A5C] font-bold shadow-sm"
                        : "bg-transparent border-transparent text-[#6B6B74] hover:bg-white"
                        }`}
                    >
                      <div className="flex items-center gap-3">
                        <svg
                          className={`w-4 h-4 shrink-0 transition-colors duration-200 ${active ? "text-[#FFC20E]" : "text-[#8B8B94]"}`}
                          fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                        </svg>
                        <span className={`text-[12.5px] tracking-wide ${active ? "font-bold text-[#1A3A5C]" : "font-normal text-[#5A5A62]"}`}>
                          {folder.label}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-[#8B8B94]">{folder.filesCount}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Right Column: Folder Details & Operations */}
            <div className="w-full lg:w-[65%] p-5 sm:p-6 flex flex-col justify-between min-h-[340px] text-left">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFolder.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col h-full justify-between gap-6"
                >
                  <div>
                    {/* Header info */}
                    <div className="border-b border-[#DDDDE6]/50 pb-3 mb-4">
                      <span className="text-[9px] font-mono text-[#B88500] tracking-widest uppercase font-bold block mb-1">
                        {currentFolder.category}
                      </span>
                      <h4 className="text-base font-bold text-[#1A3A5C] m-0">
                        {currentFolder.title}
                      </h4>
                    </div>

                    {/* Desc */}
                    <p className="text-xs sm:text-[13px] leading-relaxed text-[#5A5A62] m-0 font-normal">
                      {currentFolder.desc}
                    </p>

                    {/* Auto-processing results container */}
                    <div className="bg-[#E4F3EC]/50 border border-[#145C35]/20 rounded-xl p-4 mt-6">
                      <span className="block text-[8.5px] font-mono text-[#145C35] font-bold tracking-wider uppercase mb-3">
                        AUTO-PROCESSING RESULTS ON RECENT UPLOADS:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {currentFolder.recentUploads.map((file, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-[10.5px] font-mono text-[#3A3A3F]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#145C35]" />
                            <span className="truncate">{file.name}</span>
                            <span className="text-[#8B8B94]">—</span>
                            <span className="text-[#145C35] font-bold">{file.status}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer links */}
                  <div className="flex justify-between items-center text-[11px] leading-relaxed text-[#6B6B74] border-t border-[#DDDDE6]/50 pt-4 mt-4">
                    <span>No configuration required. Ships on Day 1.</span>
                    <button
                      onClick={() => window.scrollTo(0, 0)}
                      className="bg-transparent border-none p-0 cursor-pointer font-bold text-[#2B5F96] hover:underline flex items-center gap-0.5"
                    >
                      {currentFolder.ctaText}
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        ) : (
          /* Integrations Layout */
          <div className="flex flex-col lg:flex-row w-full">
            {/* Left Column: Enterprise Integration Hub */}
            <div className="w-full lg:w-[35%] border-b lg:border-b-0 lg:border-r border-[#DDDDE6] p-5 sm:p-6 flex flex-col justify-between text-left">
              <div>
                <div className="pb-2 border-b border-[#DDDDE6]/50 mb-4">
                  <span className="text-[9px] font-mono text-[#6B6B74] uppercase tracking-widest font-bold">
                    ENTERPRISE INTEGRATION HUB
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="border border-[#DDDDE6] rounded-xl p-3.5 flex items-center justify-between bg-white shadow-sm hover:border-[#2B5F96]/30 transition-all duration-200">
                    <span className="text-[12.5px] font-bold text-[#1A3A5C]">Oracle Aconex API</span>
                    <span className="text-[8px] font-mono font-bold tracking-wider text-[#145C35] bg-[#E4F3EC] border border-[#145C35]/30 px-2 py-0.5 rounded">CONNECTED</span>
                  </div>
                  <div className="border border-[#DDDDE6] rounded-xl p-3.5 flex items-center justify-between bg-white shadow-sm hover:border-[#2B5F96]/30 transition-all duration-200">
                    <span className="text-[12.5px] font-bold text-[#1A3A5C]">Microsoft SharePoint Sync</span>
                    <span className="text-[8px] font-mono font-bold tracking-wider text-[#145C35] bg-[#E4F3EC] border border-[#145C35]/30 px-2 py-0.5 rounded">CONNECTED</span>
                  </div>
                  <div className="border border-[#DDDDE6] rounded-xl p-3.5 flex items-center justify-between bg-white shadow-sm hover:border-[#2B5F96]/30 transition-all duration-200">
                    <span className="text-[12.5px] font-bold text-[#1A3A5C]">Primavera P6 Connector</span>
                    <span className="text-[8px] font-mono font-bold tracking-wider text-[#145C35] bg-[#E4F3EC] border border-[#145C35]/30 px-2 py-0.5 rounded">CONNECTED</span>
                  </div>
                </div>
              </div>

              {/* Secure Webhooks Warning Box */}
              <div className="bg-[#FFF9E6] border border-[#FFC20E]/40 text-[#6B6B74] rounded-xl p-4 flex gap-3 text-[11px] leading-relaxed mt-6">
                <span className="text-[14px] leading-none shrink-0 mt-0.5 font-bold text-[#FFC20E]">💡</span>
                <span>
                  Alfred connects securely via Webhooks so newly registered files in Aconex immediately map to your contract obligations.
                </span>
              </div>
            </div>

            {/* Right Column: Integration Details */}
            <div className="w-full lg:w-[65%] p-5 sm:p-6 flex flex-col justify-between min-h-[340px] text-left">
              <div className="flex flex-col gap-6">
                {/* Header */}
                <div className="border-b border-[#DDDDE6]/50 pb-3 mb-4">
                  <span className="text-[9px] font-mono text-[#B88500] tracking-widest uppercase font-bold block mb-1">
                    ENTERPRISE INTEROPERABILITY
                  </span>
                  <h4 className="text-base font-bold text-[#1A3A5C] m-0">
                    Co-exist with your current operational software
                  </h4>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-[13px] leading-relaxed text-[#5A5A62] m-0 font-normal">
                  If your team already uses Oracle Aconex, Procore, SharePoint, Primavera P6, or MS Project, Alfred does not replace them. Instead, our team of Forward-Deployed Engineers sets up seamless, background integrations. This means engineers continue uploading files to Aconex, and Alfred automatically indexes, parses, and maps obligations behind the scenes.
                </p>

                {/* Two-column features grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
                  <div>
                    <h5 className="text-[12.5px] font-bold text-[#1A3A5C] mb-1.5">Schedule Syncing</h5>
                    <p className="text-[11px] leading-relaxed text-[#5A5A62] m-0">
                      Continuous Primavera P6 .XER import tracks task delays on the contract clock.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-[12.5px] font-bold text-[#1A3A5C] mb-1.5">Document Mirroring</h5>
                    <p className="text-[11px] leading-relaxed text-[#5A5A62] m-0">
                      Secure document mirrors match safety reports, client letters, and RFI chains.
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center text-[11px] leading-relaxed text-[#6B6B74] border-t border-[#DDDDE6]/50 pt-4 mt-6">
                <span>No training required for site team.</span>
                <button
                  onClick={() => window.scrollTo(0, 0)}
                  className="bg-transparent border-none p-0 cursor-pointer font-bold text-[#2B5F96] hover:underline flex items-center gap-0.5"
                >
                  Discuss Custom Sync Setup →
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      </div>
    </div>
  )
}

// Typewriter effect for Drafting Agents console letter typing simulation
function TypewriterLetter() {
  const fullText = `To: The Chief Engineer, Metro Rail Project Group\n\nSubject: NOTICE OF DELAY & CLAIM UNDER CLAUSE 8.4 (FIDIC SILVER BOOK)\n\nDear Sir,\n\nIn accordance with Clause 8.4 [Extension of Time for Completion], we hereby give notice of a Delay Event originating on 20-Jun-2026. This delay is a direct consequence of the late issuance of revised structural drawing #DRW-042 (re-issued 18-Jun-2026), preventing pier concrete works.\n\nPreliminary assessment indicates an impact of 14 calendar days on the critical path. Formal cost impact sheets will follow as per Clause 20.1.\n\nYours faithfully,\nLead Commercial Engineer\n[ALFRED SUGGESTED CLAUSE INTERPRETATION GROUNDED IN GCC SEC. 4]`

  const [text, setText] = useState("")
  const containerRef = React.useRef(null)

  useEffect(() => {
    setText("")
    let currentIdx = 0
    const interval = setInterval(() => {
      if (currentIdx < fullText.length) {
        currentIdx = Math.min(currentIdx + 1, fullText.length)
        setText(fullText.substring(0, currentIdx))
        if (containerRef.current) {
          containerRef.current.scrollTop = containerRef.current.scrollHeight
        }
      } else {
        clearInterval(interval)
      }
    }, 15)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      ref={containerRef}
      className="bg-[#F8F8FA] border border-[#DDDDE6] rounded-xl p-4 font-mono text-[11px] leading-relaxed text-[#3A3A3F] h-[195px] overflow-y-auto whitespace-pre-wrap text-left"
    >
      {text}
      {text.length < fullText.length && <span className="animate-pulse font-bold text-[#2B5F96]">|</span>}
    </div>
  )
}

function DraftingConsole() {
  const [letterSent, setLetterSent] = useState(false)

  return (
    <div className="flex flex-col h-full justify-between">
      <div className="p-5 sm:p-6 flex-1">
        {/* Header */}
        <div className="flex justify-between items-center text-[10px] font-mono font-bold tracking-wider mb-4 pb-3 border-b border-[#DDDDE6]/50">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2B5F96]" />
            <span className="text-[#3A3A3F]">Alfred Claim Drafter · Compilation Station</span>
          </div>
          <span className="border border-[#2B5F96]/30 text-[#2B5F96] bg-[#E3F2FD] text-[8px] tracking-widest px-2.5 py-0.5 rounded font-bold">
            Clause Grounded
          </span>
        </div>

        {/* Interactive typewriter simulator */}
        <TypewriterLetter />

        {/* Bottom Dark Blue Action Banner */}
        <div className="bg-[#1A3A5C] rounded-xl p-3.5 flex justify-between items-center mt-4">
          <span className="text-[11.5px] font-semibold text-white">
            {letterSent ? "✓ Notice Letter Sent to Owner Rep" : "Commercial Team Action Needed:"}
          </span>
          <button
            onClick={() => setLetterSent(true)}
            className={`px-4 py-2 rounded font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all duration-200 ${letterSent
              ? "bg-[#145C35] text-white cursor-default"
              : "bg-[#FFC20E] text-[#1A3A5C] hover:bg-white hover:scale-[1.02] cursor-pointer"
              }`}
          >
            {letterSent ? "Sent Successfully" : "Send Letter"}
            {!letterSent && (
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Grounding Footer */}
      <div className="border-t border-[#DDDDE6] bg-[#F8F8FA]/50 px-6 sm:px-8 py-3.5 flex justify-between items-center text-[9px] font-mono text-[#8B8B94]">
        <span>Grounding: Fed on FIDIC & contract-administration logs</span>
        <span className="font-bold text-[#3A3A3F]">Human confirmation is strictly required</span>
      </div>
    </div>
  )
}

function HandoffConsole({ capability }) {
  return (
    <div className="flex flex-col h-full justify-between">
      <div className="p-5 sm:p-6 flex-1">
        {/* Header */}
        <div className="flex justify-between items-center text-[10px] font-mono font-bold tracking-wider mb-5 pb-3 border-b border-[#DDDDE6]/50">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2B5F96]" />
            <span className="text-[#3A3A3F]">TRANSITION ENGINE · BID TO OPERATIONS</span>
          </div>
          <span className="border border-[#2B5F96]/30 text-[#2B5F96] bg-[#E3F2FD] text-[8px] tracking-widest px-2.5 py-0.5 rounded font-bold">
            Risk Preservation
          </span>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Box 1 */}
          <div className="bg-[#F8F8FA] border border-[#DDDDE6] rounded-xl p-4 text-left">
            <span className="block text-[8.5px] font-mono text-[#8B8B94] tracking-widest uppercase mb-1.5 font-bold">
              1. BIDDING PHASE RISK RECORD
            </span>
            <h4 className="text-[12px] font-bold text-[#1A3A5C] m-0 mb-1.5">
              Risk #04: Testing Spec Ambiguity
            </h4>
            <p className="text-[11px] leading-relaxed text-[#5A5A62] m-0 font-normal">
              Accepted risk with mitigation strategy: Site team must raise immediate RFI on approval rules before placing orders.
            </p>
          </div>

          {/* Box 2 */}
          <div className="bg-white border border-[#FFC20E]/40 rounded-xl p-4 text-left relative shadow-sm">
            {/* Top right blue dot */}
            <span className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#2B5F96]" />

            <span className="block text-[8.5px] font-mono text-[#5A5A62] tracking-widest uppercase mb-1.5 font-bold">
              2. LIVE OPERATIONAL TRACKER (ACTIVE)
            </span>
            <h4 className="text-[12px] font-bold text-[#1A3A5C] m-0 mb-1.5 flex items-center gap-1.5">
              <svg className="w-4 h-4 text-[#2B5F96] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Tracked Obligation #OBL-842
            </h4>
            <p className="text-[11px] leading-relaxed text-[#5A5A62] m-0 font-normal">
              Mitigation activated. Mandatory milestone: "Issue technical laboratory clearance RFI within 15 days of site handover."
            </p>
          </div>
        </div>

        {/* Alert Info Banner */}
        <div className="bg-[#EAECEF]/40 border border-[#DDDDE6]/60 rounded-xl p-3.5 flex gap-3 items-start">
          <svg className="w-4 h-4 text-[#2B5F96] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-[11px] leading-relaxed m-0 text-[#5A5A62] text-left">
            <strong className="text-[#3A3A3F] font-bold">No leakages:</strong> Alfred forces alignment between your estimating team and the project managers, ensuring pre-bid context is never forgotten.
          </p>
        </div>
      </div>

      {/* Grounding Footer */}
      <div className="border-t border-[#DDDDE6] bg-[#F8F8FA]/50 px-6 sm:px-8 py-3.5 flex justify-between items-center text-[9px] font-mono text-[#8B8B94]">
        <span>{capability.groundingLeft}</span>
        <span className="font-bold text-[#3A3A3F]">{capability.groundingRight}</span>
      </div>
    </div>
  )
}

function ObligationConsole({ capability }) {
  return (
    <div className="flex flex-col h-full justify-between">
      <div className="p-5 sm:p-6 flex-1">
        {/* Header */}
        <div className="flex justify-between items-center text-[10px] font-mono font-bold tracking-wider mb-5 pb-3 border-b border-[#DDDDE6]/50">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D32F2F] animate-pulse" />
            <span className="text-[#3A3A3F]">CLAUSE OBEDIENCE MONITOR · LIVE OBLIGATION LOGS</span>
          </div>
          <span className="border border-[#D32F2F]/30 text-[#D32F2F] bg-[#FFF0F0] text-[8px] tracking-widest px-2.5 py-0.5 rounded font-bold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D32F2F]" />
            Notice Deadline Critical
          </span>
        </div>

        {/* Active Site Event Card */}
        <div className="bg-white border border-[#DDDDE6] rounded-xl p-4 text-left shadow-sm mb-4">
          <div className="flex justify-between items-start mb-2">
            <span className="text-[8.5px] font-mono text-[#8B8B94] tracking-widest uppercase font-bold">
              ACTIVE SITE EVENT
            </span>
            <div className="text-right flex flex-col items-end leading-none">
              <span className="bg-[#FFF0F0] text-[#D32F2F] text-[9px] font-bold px-2 py-0.5 rounded border border-[#D32F2F]/20">
                6 DAYS LEFT
              </span>
              <span className="text-[8px] font-mono text-[#8B8B94] mt-1">
                28-day FIDIC Window
              </span>
            </div>
          </div>
          <h4 className="text-[13px] font-bold text-[#1A3A5C] m-0 mb-1.5">
            Non-issuance of Pier Layout Drawings (Sec 4)
          </h4>
          <p className="text-[11px] text-[#8B8B94] m-0 font-normal">
            Critical path block since 18-Jun-2026
          </p>
          {/* Red progress line */}
          <div className="w-full bg-[#EAECEF] h-1.5 rounded-full overflow-hidden mt-4 relative">
            <div className="bg-[#D32F2F] h-full rounded-full transition-all duration-500" style={{ width: '80%' }} />
          </div>
        </div>

        {/* Status badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-[#F8F8FA] border border-[#DDDDE6] rounded-lg py-2.5 px-3.5 flex items-center gap-2 text-[10.5px] font-semibold text-[#3A3A3F] text-left">
            <svg className="w-3.5 h-3.5 text-[#145C35] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
            DPR delay logged automatically
          </div>
          <div className="bg-[#F8F8FA] border border-[#DDDDE6] rounded-lg py-2.5 px-3.5 flex items-center gap-2 text-[10.5px] font-semibold text-[#3A3A3F] text-left">
            <svg className="w-3.5 h-3.5 text-[#145C35] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
            Pre-linked evidence mapped
          </div>
        </div>
      </div>

      {/* Grounding Footer */}
      <div className="border-t border-[#DDDDE6] bg-[#F8F8FA]/50 px-6 sm:px-8 py-3.5 flex justify-between items-center text-[9px] font-mono text-[#8B8B94]">
        <span>{capability.groundingLeft}</span>
        <span className="font-bold text-[#3A3A3F]">Human confirmation is strictly required</span>
      </div>
    </div>
  )
}

function ScheduleConsole({ capability }) {
  return (
    <div className="flex flex-col h-full justify-between">
      <div className="p-5 sm:p-6 flex-1">
        {/* Header */}
        <div className="flex justify-between items-center text-[10px] font-mono font-bold tracking-wider mb-4 pb-3 border-b border-[#DDDDE6]/50">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2B5F96]" />
            <span className="text-[#3A3A3F]">SCHEDULE MONITOR & CONTRACT LINKER</span>
          </div>
          <span className="border border-[#DDDDE6] text-[#5A5A62] bg-[#F4F4F7] text-[8px] tracking-widest px-2.5 py-0.5 rounded font-bold">
            Continuous Dual Track
          </span>
        </div>

        {/* Description Paragraph */}
        <p className="text-left text-[#5A5A62] text-[12px] leading-relaxed m-0 mb-4 font-normal">
          Alfred tracks your project schedule independently and against signed contracts, official client letters, and subsequent amendments, preventing critical path delays from going unnoticed.
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Enterprise Integration */}
          <div className="bg-[#F8F8FA] border border-[#DDDDE6] rounded-xl p-4 text-left">
            <span className="block text-[8.5px] font-mono text-[#2B5F96] font-bold tracking-widest uppercase mb-1.5">
              ENTERPRISE INTEGRATION
            </span>
            <h4 className="text-[12px] font-bold text-[#1A3A5C] m-0 mb-1.5 flex items-center gap-1.5">
              <svg className="w-4 h-4 text-[#2B5F96] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
              Primavera P6 Sync
            </h4>
            <p className="text-[11px] leading-relaxed text-[#5A5A62] m-0 font-normal">
              Direct import and mapping of master schedules (.XER files) for complex multi-tier dependencies.
            </p>
          </div>

          {/* Field Companion */}
          <div className="bg-[#F8F8FA] border border-[#DDDDE6] rounded-xl p-4 text-left">
            <span className="block text-[8.5px] font-mono text-[#2B5F96] font-bold tracking-widest uppercase mb-1.5">
              ALFRED FIELD COMPANION
            </span>
            <h4 className="text-[12px] font-bold text-[#1A3A5C] m-0 mb-1.5 flex items-center gap-1.5">
              <svg className="w-4 h-4 text-[#2B5F96] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              Lite Site Update App
            </h4>
            <p className="text-[11px] leading-relaxed text-[#5A5A62] m-0 font-normal">
              A quick-input site application designed for the delivery team to update daily site progress.
            </p>
          </div>
        </div>

        {/* Yellow Warning box */}
        <div className="bg-[#FFF9E6] border border-[#FFC20E]/40 rounded-xl p-3.5 flex gap-3 items-start">
          <svg className="w-4 h-4 text-[#B88500] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <div className="flex flex-col gap-0.5 text-left">
            <h5 className="text-[11px] font-bold text-[#B88500] m-0">Contract & Letter Amendment Cross-Reference</h5>
            <p className="text-[10.5px] leading-relaxed m-0 text-[#5A5A62] mt-0.5">
              Site updates and P6 schedules are mapped dynamically to key clauses and amendment dates. Any variance triggers automated notices of claim under standard delay rules.
            </p>
          </div>
        </div>
      </div>

      {/* Grounding Footer */}
      <div className="border-t border-[#DDDDE6] bg-[#F8F8FA]/50 px-6 sm:px-8 py-3.5 flex justify-between items-center text-[9px] font-mono text-[#8B8B94]">
        <span>{capability.groundingLeft}</span>
        <span className="font-bold text-[#3A3A3F]">{capability.groundingRight}</span>
      </div>
    </div>
  )
}

// The Interactive Console component matching Image 2
function LayerConsole({ layer }) {
  const [activeTab, setActiveTab] = useState(0)
  const capability = layer.capabilities[activeTab]

  // Color mappings for the alert box
  const alertStyles = {
    warning: {
      bg: "bg-[#FFF9E6] border-[#FFC20E]/40 text-[#6B6B74]",
      titleColor: "text-[#B88500]",
      badgeColor: "text-[#B88500] border-[#FFC20E]/40 bg-[#FFF6D6]",
      icon: (
        <svg className="w-5 h-5 text-[#B88500] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      )
    },
    success: {
      bg: "bg-[#E4F3EC] border-[#145C35]/20 text-[#6B6B74]",
      titleColor: "text-[#145C35]",
      badgeColor: "text-[#145C35] border-[#145C35]/30 bg-[#E4F3EC]",
      icon: (
        <svg className="w-5 h-5 text-[#145C35] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    info: {
      bg: "bg-[#E3F2FD] border-[#2B5F96]/20 text-[#6B6B74]",
      titleColor: "text-[#1A3A5C]",
      badgeColor: "text-[#2B5F96] border-[#2B5F96]/30 bg-[#E3F2FD]",
      icon: (
        <svg className="w-5 h-5 text-[#1A3A5C] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  }

  const currentStyle = alertStyles[capability?.alertType] || alertStyles.info

  return (
    <div className="bg-white border border-[#DDDDE6] rounded-[2rem] shadow-sm text-left relative overflow-hidden w-full">
      {/* 1. Header Bar: Shield, Title, Subtitle, and Badge */}
      <div className="px-8 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left w-full">
        <div className="flex items-center gap-3">
          {/* Shield logo / Icon */}
          <div className="text-[#FFC20E] shrink-0">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div>
            <span className="text-[10px] font-mono text-[#8B8B94] uppercase tracking-widest font-bold block leading-none mb-1">
              LAYER 1 - THE PRODUCT CO-PILOT
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-[#1A3A5C] m-0 leading-tight">
              Contract Intelligence Core
            </h3>
          </div>
        </div>
        <div className="border border-[#DDDDE6] text-[#5A5A62] bg-[#F4F4F7] text-[10px] font-mono font-bold tracking-wider px-3.5 py-1 rounded shadow-sm select-none w-fit shrink-0 sm:self-center">
          Enterprise Contract Intelligence
        </div>
      </div>

      {/* Horizontal Divider Line */}
      <hr className="border-t border-[#DDDDE6] m-0 p-0" />

      {/* 2. Description Section */}
      <div className="px-8 py-5">
        <p className="text-left text-[#5A5A62] text-[13px] leading-relaxed max-w-4xl m-0 font-normal">
          From risk discovery during bidding to obligation tracking during execution and ultimate defense during claim generation, Alfred's co-pilot models run through the entire project life cycle.
        </p>
      </div>

      {/* Horizontal Divider Line */}
      <hr className="border-t border-[#DDDDE6] m-0 p-0" />

      {/* 3. Bottom Section: Capability switcher & details */}
      <div className="flex flex-col lg:flex-row w-full min-h-[400px]">
        {/* Left Column: Selector */}
        <div className="w-full lg:w-[30%] border-b lg:border-b-0 lg:border-r border-[#DDDDE6] bg-white p-4 sm:p-5 flex flex-col gap-3 text-left">
          <span className="text-[9px] font-mono text-[#8B8B94] uppercase tracking-widest font-bold block mb-1">
            SELECT CORE CAPABILITY
          </span>
          <div className="flex flex-col gap-2">
            {layer.capabilities.map((cap, idx) => {
              const active = activeTab === idx
              return (
                <button
                  key={cap.id}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left p-3 rounded-xl transition-all duration-300 border cursor-pointer select-none ${active
                    ? "bg-white border-[#1A3A5C] border-[1.5px] shadow-sm text-[#1A3A5C] font-semibold"
                    : "bg-transparent border-transparent hover:bg-white/50 text-[#6B6B74]"
                    }`}
                >
                  <div className="flex gap-2.5 items-start">
                    <div className={`shrink-0 mt-0.5 ${active ? 'text-[#1A3A5C]' : 'text-[#8B8B94]'}`}>
                      {cap.icon}
                    </div>
                    <div>
                      <span className={`block text-xs font-bold mb-1 tracking-wide ${active ? 'text-[#1A3A5C]' : 'text-[#3A3A3F]'}`}>
                        {cap.title}
                      </span>
                      <span className="block text-[10.5px] leading-relaxed text-[#8B8B94] font-normal">
                        {cap.desc}
                      </span>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Right Column: Display details */}
        <div className="w-full lg:w-[70%] flex flex-col justify-between text-left relative overflow-hidden bg-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={capability.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col h-full justify-between"
            >
              {capability.id === "handoff" ? (
                <HandoffConsole capability={capability} />
              ) : capability.id === "obligation" ? (
                <ObligationConsole capability={capability} />
              ) : capability.id === "schedule" ? (
                <ScheduleConsole capability={capability} />
              ) : capability.id === "drafting" ? (
                <DraftingConsole />
              ) : (
                <>
                  {/* Core content inside details */}
                  <div className="p-5 sm:p-6 flex-1">
                    {/* Detail Header */}
                    <div className="flex justify-between items-center text-[10px] font-mono font-bold tracking-wider mb-5 pb-3">
                      <div className="flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${capability.alertType === 'warning' ? 'bg-[#FFC20E]' : capability.alertType === 'success' ? 'bg-[#145C35]' : 'bg-[#2B5F96]'} animate-pulse`} />
                        <span className="text-[#3A3A3F]">{capability.inspectorTitle}</span>
                      </div>
                      <span className="border border-[#DDDDE6] text-[#5A5A62] bg-[#F4F4F7] text-[8px] tracking-widest px-2 py-0.5 rounded">
                        {capability.inspectorBadge}
                      </span>
                    </div>

                    {/* Scanned/Extract Code Box */}
                    <div className="bg-[#F8F8FA] border border-[#DDDDE6] rounded-xl p-3.5 sm:p-4 font-mono text-[10.5px] leading-relaxed text-[#3A3A3F]">
                      <span className="block text-[9px] font-mono text-[#8B8B94] tracking-widest uppercase mb-2">
                        {capability.extractTitle}
                      </span>
                      <p className="m-0 italic text-[#5A5A62]">
                        {capability.extractText}
                      </p>
                    </div>

                    {/* Alert Warning Box */}
                    <div className={`border rounded-xl p-3.5 mt-3 flex gap-3 items-start ${currentStyle.bg}`}>
                      {currentStyle.icon}
                      <div className="flex flex-col gap-1 w-full">
                        <h4 className={`text-xs font-bold m-0 tracking-wide uppercase ${currentStyle.titleColor}`}>
                          {capability.alertTitle}
                        </h4>
                        <p className="text-[11px] leading-relaxed m-0 text-[#5A5A62] mt-0.5">
                          {capability.alertText}
                        </p>
                        <div className="flex justify-between items-center mt-3 pt-3 border-t border-[#DDDDE6]/30 text-[10px] font-semibold">
                          <span className="text-[#6B6B74] font-normal">{capability.actionTextLeft}</span>
                          <button
                            onClick={() => window.scrollTo(0, 0)}
                            className={`bg-transparent border-none p-0 cursor-pointer font-bold hover:underline flex items-center gap-0.5 ${currentStyle.titleColor}`}
                          >
                            {capability.actionTextRight}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Grounding Footer Panel */}
                  <div className="border-t border-[#DDDDE6] bg-[#F8F8FA]/50 px-6 sm:px-8 py-3.5 flex justify-between items-center text-[9px] font-mono text-[#8B8B94]">
                    <span>{capability.groundingLeft}</span>
                    <span className="font-bold text-[#3A3A3F]">{capability.groundingRight}</span>
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

function Platform() {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-[#F4F4F7] min-h-screen text-[#6B6B74] font-primary select-none selection:bg-[#FFC20E]/30 relative overflow-x-hidden">
      <SEO
        title="Platform Capabilities"
        description="Explore the modular engines of Alfred: Intelligent Knowledge Engine, Smart Staging, Unified Command Center, and Compliance Workspace."
      />
      <Navbar />

      <main className="pt-28 sm:pt-32 pb-24 px-6 sm:px-12 md:px-16 lg:px-20 relative z-10">
        {/* Top ambient yellow radial glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none z-0"
          style={{
            background: 'radial-gradient(circle at center, rgba(255, 194, 14, 0.05), transparent 70%)'
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-12">
          {/* Header Block (Image 1 Compliance - Left Aligned) */}
          <div className="text-left flex flex-col gap-3.5 max-w-3xl mr-auto mb-6">
            {/* Eyebrow */}
            <div className="w-fit bg-white border border-[#FFC20E] text-[#B88500] text-[10px] font-mono font-bold tracking-widest px-3.5 py-1 rounded-full uppercase select-none">
              ALFRED ARCHITECTURE
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] font-bold leading-[1.2] tracking-tight m-0 text-[#1A3A5C] mt-2">
              One co-pilot for the whole contract.<br />
              <span className="text-[#2B5F96]">From the bid you're pricing to the claim<br />you're defending.</span>
            </h1>

            <p className="text-[#5A5A62] text-xs sm:text-[13.5px] leading-relaxed m-0 mt-2 max-w-2xl font-normal">
              Alfred is a single assistant over your project. Underneath, three layers — a contract
              intelligence core, a project context workspace, and the utilities that get your data in.
              Contracts are the spine; everything else serves them.
            </p>
          </div>

          {/* Render the 3 Product layers (Stack of interactive consoles inside card wrappers) */}
          <div className="flex flex-col gap-12 mt-4">
            {platformLayers.map((layer) => (
              <section key={layer.id} id={layer.id} className="scroll-mt-32 w-full">
                {layer.layerNumber === 2 ? (
                  <Layer2Console layer={layer} />
                ) : layer.layerNumber === 3 ? (
                  <Layer3Console layer={layer} />
                ) : (
                  <LayerConsole layer={layer} />
                )}
              </section>
            ))}
          </div>
        </div>
      </main>

      {/* Bottom CTA Banner (Industry Domain Knowledge) */}
      <section className="mb-20 px-6 sm:px-12 md:px-16 lg:px-20 max-w-7xl mx-auto w-full">
        <div className="bg-[#1A3A5C] rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md text-left">
          <div className="flex-1">
            <span className="text-[10px] font-mono text-[#FFC20E] uppercase tracking-widest font-bold block mb-2">
              PRE-TRAINED INDUSTRY DOMAIN KNOWLEDGE
            </span>
            <p className="text-white text-xs sm:text-[13.5px] leading-relaxed m-0 opacity-90 font-normal">
              "Pre-built for your world. Tuned to your projects. Alfred ships knowing <strong className="text-white font-bold">FIDIC, CPWD GCC, NHAI, Metro Rail, PWD, IRCON, RVNL, AIA and IFC standards</strong>, with contract-administration playbooks fully built in."
            </p>
          </div>
          <div className="shrink-0">
            <button
              onClick={() => {
                navigate('/demo')
                window.scrollTo(0, 0)
              }}
              className="bg-[#FFC20E] text-[#1A3A5C] hover:bg-white hover:scale-[1.02] transition-all duration-200 font-bold px-6 py-3.5 rounded-lg text-xs uppercase tracking-wider cursor-pointer border-none shadow-sm"
            >
              Review Our Risk Library
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Platform
