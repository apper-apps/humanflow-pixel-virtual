import { aiReportData } from '@/services/mockData/aiReportData.json'
import { plagiarismReportData } from '@/services/mockData/plagiarismReportData.json'
import { humanizedTextData } from '@/services/mockData/humanizedTextData.json'

class TextProcessingService {
  async processText({ text, tone, language }) {
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 2000 + Math.random() * 1000))
    
    // Simulate potential errors
    if (Math.random() < 0.1) {
      throw new Error('Processing service temporarily unavailable')
    }

    // Generate AI report
    const aiReport = {
      score: Math.floor(Math.random() * 40) + 20, // 20-60% for humanized text
      confidence: Math.floor(Math.random() * 20) + 75, // 75-95% confidence
      flaggedPhrases: this.generateFlaggedPhrases(text),
      analysis: {
        naturalness: Math.floor(Math.random() * 30) + 70,
        coherence: Math.floor(Math.random() * 20) + 80,
        vocabulary: Math.floor(Math.random() * 25) + 75
      }
    }

    // Generate plagiarism report
    const plagiarismReport = {
      matchPercentage: Math.floor(Math.random() * 15) + 5, // 5-20% for original content
      sources: this.generateSources(),
      highlights: this.generateHighlights(text)
    }

    // Generate humanized text
    const humanizedText = this.generateHumanizedText(text, tone, language)

    return {
      humanizedText,
      aiReport,
      plagiarismReport
    }
  }

  generateHumanizedText(originalText, tone, language) {
    const templates = humanizedTextData[tone] || humanizedTextData.casual
    const template = templates[Math.floor(Math.random() * templates.length)]
    
    // Simple text transformation for demo
    let humanized = originalText
    
    // Apply tone-specific modifications
    if (tone === 'formal') {
      humanized = humanized.replace(/\bcan't\b/g, 'cannot')
                           .replace(/\bwon't\b/g, 'will not')
                           .replace(/\bdon't\b/g, 'do not')
    } else if (tone === 'casual') {
      humanized = humanized.replace(/\btherefore\b/g, 'so')
                           .replace(/\bhowever\b/g, 'but')
                           .replace(/\bnevertheless\b/g, 'still')
    }
    
    // Add some variety to sentence structure
    const sentences = humanized.split('. ')
    const modifiedSentences = sentences.map(sentence => {
      if (Math.random() < 0.3) {
        return this.addVariation(sentence, tone)
      }
      return sentence
    })
    
    return modifiedSentences.join('. ')
  }

  addVariation(sentence, tone) {
    const variations = {
      casual: [
        'You know, ',
        'Actually, ',
        'I think ',
        'To be honest, '
      ],
      formal: [
        'It is worth noting that ',
        'Furthermore, ',
        'In addition, ',
        'Moreover, '
      ],
      creative: [
        'Interestingly, ',
        'Surprisingly, ',
        'Remarkably, ',
        'Fascinatingly, '
      ]
    }
    
    const prefixes = variations[tone] || variations.casual
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)]
    
    return Math.random() < 0.5 ? prefix + sentence : sentence
  }

  generateFlaggedPhrases(text) {
    const commonAIPhrases = [
      'As an AI',
      'In conclusion',
      'Furthermore',
      'It is important to note',
      'Additionally',
      'Moreover',
      'Therefore',
      'In summary'
    ]
    
    return commonAIPhrases.filter(phrase => 
      text.toLowerCase().includes(phrase.toLowerCase())
    ).slice(0, 3)
  }

  generateSources() {
    const sources = [
      { url: 'wikipedia.org', similarity: 12 },
      { url: 'britannica.com', similarity: 8 },
      { url: 'academia.edu', similarity: 6 },
      { url: 'researchgate.net', similarity: 4 }
    ]
    
    return sources.slice(0, Math.floor(Math.random() * 3) + 1)
  }

  generateHighlights(text) {
    const words = text.split(' ')
    const highlights = []
    
    for (let i = 0; i < Math.min(3, words.length); i++) {
      const startIndex = Math.floor(Math.random() * (words.length - 5))
      const length = Math.floor(Math.random() * 3) + 2
      
      highlights.push({
        start: startIndex,
        length: length,
        source: 'Academic Source'
      })
    }
    
    return highlights
  }
}

export const textProcessingService = new TextProcessingService()