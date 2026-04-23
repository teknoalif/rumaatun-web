"use client";
import React from 'react';

interface Props {
  title: string;
  content: string;
}

const VideoDescription = ({ title, content }: Props) => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-slate-100 shadow-sm">
      <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{title}</h1>
      <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed whitespace-pre-wrap">
        {content}
      </div>
    </div>
  );
};

export default VideoDescription; 
