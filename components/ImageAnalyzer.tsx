
import React, { useState, useRef } from 'react';
import { GoogleGenAI } from '@google/genai';

const ImageAnalyzer: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        setAnalysis(null);
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeImage = async () => {
    if (!selectedImage) return;

    setIsLoading(true);
    setError(null);

    try {
      // Initialize GoogleGenAI with named parameter right before making the call
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const base64Data = selectedImage.split(',')[1];
      
      // Call generateContent with both model name and prompt in a single call
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: {
          parts: [
            {
              inlineData: {
                data: base64Data,
                mimeType: 'image/jpeg',
              },
            },
            {
              text: "You are a professional roofing inspector from West Point Roofing. Analyze this image of a roof. Identify the material, its general condition, and note any potential issues like damage, wear, or debris. Be professional, encouraging, and clear. Suggest if they should book a professional in-person inspection.",
            },
          ],
        },
      });

      // Directly access .text property from GenerateContentResponse
      setAnalysis(response.text || "I'm sorry, I couldn't generate an analysis. Please try again with a clearer image.");
    } catch (err) {
      console.error(err);
      setError("Failed to analyze image. Please ensure your API key is valid and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24 bg-background-light dark:bg-background-dark transition-colors duration-300" id="analysis">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-4">
            AI-Powered Analysis
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Roof Health Check</h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
            Upload a photo of your roof and get instant professional AI-driven insights from our expert virtual inspector.
          </p>
        </div>

        <div className="bg-surface-light dark:bg-surface-dark rounded-3xl p-8 border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden">
          {!selectedImage ? (
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="group border-2 border-dashed border-slate-300 dark:border-white/20 rounded-2xl py-20 flex flex-col items-center justify-center cursor-pointer hover:border-primary transition-all bg-slate-50 dark:bg-white/5"
            >
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-4xl">add_a_photo</span>
              </div>
              <p className="text-slate-900 dark:text-white font-bold mb-2">Click to upload a photo</p>
              <p className="text-slate-500 text-sm">JPG, PNG up to 10MB</p>
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileChange} 
                className="hidden" 
                accept="image/*"
              />
            </div>
          ) : (
            <div className="space-y-8">
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl border border-white/10 group">
                <img src={selectedImage} alt="Uploaded roof" className="w-full h-full object-cover" />
                <button 
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 bg-black/60 hover:bg-red-500 text-white p-2 rounded-full backdrop-blur-md transition-all flex items-center justify-center"
                >
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </div>

              {!analysis && !isLoading && (
                <button 
                  onClick={analyzeImage}
                  className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 transform hover:-translate-y-1"
                >
                  <span className="material-symbols-outlined">analytics</span>
                  Run AI Analysis
                </button>
              )}

              {isLoading && (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
                  <p className="text-slate-500 font-medium animate-pulse">Our virtual inspector is reviewing your photo...</p>
                </div>
              )}

              {error && (
                <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-lg text-red-500 text-center flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined">error</span>
                  {error}
                </div>
              )}

              {analysis && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                  <div className="bg-slate-50 dark:bg-white/5 p-8 rounded-2xl border-l-4 border-primary shadow-sm">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
                        <span className="material-symbols-outlined text-sm">robot_2</span>
                      </div>
                      <h4 className="font-bold text-lg">Analysis Result</h4>
                    </div>
                    <div className="prose prose-slate dark:prose-invert max-w-none">
                      <p className="whitespace-pre-wrap text-slate-600 dark:text-slate-300 leading-relaxed italic">
                        {analysis}
                      </p>
                    </div>
                    <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row gap-4 items-center justify-between">
                      <p className="text-xs text-slate-500">*Disclaimer: This is an AI assessment and does not replace a physical inspection.</p>
                      <a href="#estimate" className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg text-sm font-bold transition-all shadow-md">
                        Book Pro Inspection
                      </a>
                    </div>
                  </div>
                  <button 
                    onClick={() => { setSelectedImage(null); setAnalysis(null); }}
                    className="mt-6 text-sm text-slate-500 hover:text-primary transition-colors flex items-center gap-2 mx-auto"
                  >
                    <span className="material-symbols-outlined text-sm">refresh</span>
                    Start Over
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ImageAnalyzer;
