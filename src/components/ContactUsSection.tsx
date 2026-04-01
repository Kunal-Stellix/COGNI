"use client";

import { useState } from 'react';

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API Call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const resetForm = () => setIsSuccess(false);

  return {
    isSubmitting,
    isSuccess,
    handleSubmit,
    resetForm
  };
};