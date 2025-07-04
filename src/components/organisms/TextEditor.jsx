import React from "react";
import { motion } from "framer-motion";
import TextInputPanel from "@/components/molecules/TextInputPanel";
import TextOutputPanel from "@/components/molecules/TextOutputPanel";
import ProcessingOverlay from "@/components/molecules/ProcessingOverlay";
import Empty from "@/components/ui/Empty";
import AppIcon from "@/components/ui/AppIcon";

const TextEditor = ({ 
  originalText, 
  onOriginalTextChange, 
  humanizedText, 
  isProcessing, 
  showComparison,
  error 
}) => {
  const isEmpty = !originalText.trim() && !humanizedText.trim()

  if (isEmpty) {
    return (
      <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8">
        <Empty 
          icon="PenTool"
          title="Ready to Humanize Your Text"
          description="Paste or type your AI-generated content to transform it into natural, human-like writing."
          actionText="Start Writing"
          onAction={() => document.getElementById('text-input')?.focus()}
        />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Single Panel or Comparison View */}
      {showComparison && humanizedText ? (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <TextInputPanel
              value={originalText}
              onChange={onOriginalTextChange}
              isProcessing={isProcessing}
              title="Original Text"
              placeholder="Paste your AI-generated text here..."
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <TextOutputPanel
              value={humanizedText}
              isProcessing={isProcessing}
              title="Humanized Text"
              originalText={originalText}
            />
          </motion.div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <TextInputPanel
            value={originalText}
            onChange={onOriginalTextChange}
            isProcessing={isProcessing}
            title="Input Text"
            placeholder="Paste your AI-generated text here to humanize it..."
          />
        </motion.div>
      )}

      {/* Processing Overlay */}
      {isProcessing && (
        <ProcessingOverlay />
      )}

      {/* Error Display */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-50 border border-red-200 rounded-lg p-4"
>
          <div className="flex items-center space-x-2">
            <AppIcon name="AlertCircle" className="w-5 h-5 text-red-500" />
            <span className="text-red-700 font-medium">Processing Error</span>
          </div>
          <p className="text-red-600 text-sm mt-1">{error}</p>
        </motion.div>
      )}
    </div>
  )
}

export default TextEditor