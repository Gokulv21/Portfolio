import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

// Form Validation Schema using Zod
const createContactSchema = (t: (key: string) => string) =>
  zod.object({
    name: zod.string().min(2, { message: t('contact.name_required') }),
    email: zod.string().email({ message: t('contact.email_invalid') }),
    message: zod.string().min(5, { message: t('contact.message_required') }),
  });

type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

export function Contact() {
  const { t } = useTranslation();
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  // Schema initialization
  const schema = createContactSchema(t);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setStatus('sending');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      // Mock successful email dispatch in local/dev fallback environments
      console.log('EmailJS variables missing. Simulating sending data:', data);
      setTimeout(() => {
        setStatus('success');
        reset();
      }, 1500);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.name,
          from_email: data.email,
          reply_to: data.email,
          user_name: data.name,
          user_email: data.email,
          email: data.email,
          message: data.message,
        },
        publicKey
      );
      setStatus('success');
      reset();
    } catch (err) {
      console.error('EmailJS error:', err);
      console.error('If you are seeing this, please verify that:',
        '\n1. The service ID, template ID, and public key in your .env are correct.',
        '\n2. If deploying to production (e.g. Vercel), you have added these environment variables in your deployment dashboard.'
      );
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      {/* Background soft red glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-glow opacity-15 blur-[120px] pointer-events-none" />

      <div className="w-full max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-16">
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            {t('contact.title')}
          </h2>
          <p className="text-zinc-500 text-sm sm:text-base max-w-lg mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Contact Form Wrapper */}
        <motion.div
          className="glass-premium rounded-[32px] p-6 sm:p-10 border border-brand-red/10 max-w-2xl mx-auto shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {status === 'success' && (
            <div className="flex flex-col items-center justify-center text-center space-y-4 py-8">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 animate-bounce" />
              <p className="text-sm font-semibold text-white">{t('contact.success')}</p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-4 px-5 py-2 rounded-full text-xs font-semibold bg-zinc-900 border border-zinc-800 text-gray-300 hover:text-white"
              >
                Send another message
              </button>
            </div>
          )}

          {status !== 'success' && (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {status === 'error' && (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs sm:text-sm">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <p>{t('contact.error')}</p>
                </div>
              )}

              {/* Name field */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-400 block">
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  {...register('name')}
                  placeholder="Gokul"
                  className="w-full px-4 py-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 focus:border-brand-red text-white text-sm outline-none transition-colors"
                />
                {errors.name && (
                  <p className="text-red-400 text-[10px] sm:text-xs font-semibold">{errors.name.message}</p>
                )}
              </div>

              {/* Email field */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-400 block">
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  {...register('email')}
                  placeholder="gokul@example.com"
                  className="w-full px-4 py-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 focus:border-brand-red text-white text-sm outline-none transition-colors"
                />
                {errors.email && (
                  <p className="text-red-400 text-[10px] sm:text-xs font-semibold">{errors.email.message}</p>
                )}
              </div>

              {/* Message field */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-400 block">
                  {t('contact.message')}
                </label>
                <textarea
                  rows={5}
                  {...register('message')}
                  placeholder="Hello! I would love to build a premium system..."
                  className="w-full px-4 py-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 focus:border-brand-red text-white text-sm outline-none transition-colors resize-none"
                />
                {errors.message && (
                  <p className="text-red-400 text-[10px] sm:text-xs font-semibold">{errors.message.message}</p>
                )}
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-4 px-6 rounded-xl bg-brand-red hover:bg-brand-red-hover disabled:bg-zinc-800 text-white font-bold text-sm tracking-wide transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                {status === 'sending' ? (
                  <span>{t('contact.sending')}</span>
                ) : (
                  <>
                    <span>{t('contact.send')}</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
}
export default Contact;
