import { motion } from 'framer-motion';
import { Calendar, Clock, User, Mail, Phone } from 'lucide-react';
import { useState } from 'react';

/**
 * Booking Component - Calendly-style booking interface
 * Design: Cyberpunk Minimalism - Clean booking form with date/time selection
 */
export default function Booking() {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const availableDates = [
    '2024-04-01',
    '2024-04-02',
    '2024-04-03',
    '2024-04-04',
    '2024-04-05',
  ];

  const availableTimes = [
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
  ];

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBooking = () => {
    if (selectedDate && selectedTime && formData.name && formData.email) {
      // Handle booking submission
      console.log('Booking confirmed:', {
        date: selectedDate,
        time: selectedTime,
        ...formData,
      });
      // Reset form
      setStep(1);
      setSelectedDate(null);
      setSelectedTime(null);
      setFormData({ name: '', email: '', phone: '' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-2xl mx-auto p-8 bg-card border-2 border-cyan-500/30 rounded-2xl"
    >
      {/* Header */}
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-foreground mb-2">
          Schedule Your Demo
        </h3>
        <p className="text-foreground/60">
          Book a 30-minute consultation with our team
        </p>
      </div>

      {/* Step Indicator */}
      <div className="flex justify-between items-center mb-8">
        {[1, 2, 3].map((stepNum) => (
          <motion.div
            key={stepNum}
            className="flex items-center flex-1"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                step >= stepNum
                  ? 'bg-cyan-500 text-background'
                  : 'bg-foreground/10 text-foreground/60'
              }`}
            >
              {stepNum}
            </motion.div>
            {stepNum < 3 && (
              <div
                className={`flex-1 h-1 mx-2 transition-all ${
                  step > stepNum ? 'bg-cyan-500' : 'bg-foreground/10'
                }`}
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* Step 1: Date Selection */}
      {step === 1 && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="space-y-6"
        >
          <div>
            <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Calendar size={20} className="text-cyan-400" />
              Select a Date
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {availableDates.map((date) => (
                <motion.button
                  key={date}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedDate(date)}
                  className={`p-4 rounded-lg font-semibold transition-all border-2 ${
                    selectedDate === date
                      ? 'bg-cyan-500 text-background border-cyan-500'
                      : 'bg-background/50 text-foreground border-border hover:border-cyan-500/50'
                  }`}
                >
                  {new Date(date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                  })}
                </motion.button>
              ))}
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setStep(2)}
            disabled={!selectedDate}
            className="w-full px-6 py-3 bg-cyan-500 text-background font-bold rounded-lg hover:bg-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            Continue
          </motion.button>
        </motion.div>
      )}

      {/* Step 2: Time Selection */}
      {step === 2 && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="space-y-6"
        >
          <div>
            <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Clock size={20} className="text-magenta-400" />
              Select a Time
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {availableTimes.map((time) => (
                <motion.button
                  key={time}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedTime(time)}
                  className={`p-4 rounded-lg font-semibold transition-all border-2 ${
                    selectedTime === time
                      ? 'bg-magenta-500 text-background border-magenta-500'
                      : 'bg-background/50 text-foreground border-border hover:border-magenta-500/50'
                  }`}
                >
                  {time}
                </motion.button>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setStep(1)}
              className="flex-1 px-6 py-3 border-2 border-foreground/30 text-foreground font-bold rounded-lg hover:border-foreground/50 transition-all"
            >
              Back
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setStep(3)}
              disabled={!selectedTime}
              className="flex-1 px-6 py-3 bg-cyan-500 text-background font-bold rounded-lg hover:bg-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              Continue
            </motion.button>
          </div>
        </motion.div>
      )}

      {/* Step 3: Contact Information */}
      {step === 3 && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="space-y-6"
        >
          <div className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                <User size={16} className="text-cyan-400" />
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                <Mail size={16} className="text-cyan-400" />
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                placeholder="your@email.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                <Phone size={16} className="text-cyan-400" />
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleFormChange}
                className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>

          {/* Summary */}
          <div className="p-4 bg-background/50 border border-border rounded-lg">
            <p className="text-sm text-foreground/60 mb-2">Booking Summary:</p>
            <div className="space-y-1 text-foreground font-semibold">
              <p>📅 {new Date(selectedDate || '').toLocaleDateString()}</p>
              <p>🕐 {selectedTime}</p>
              <p>👤 {formData.name || 'Your name'}</p>
            </div>
          </div>

          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setStep(2)}
              className="flex-1 px-6 py-3 border-2 border-foreground/30 text-foreground font-bold rounded-lg hover:border-foreground/50 transition-all"
            >
              Back
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 217, 255, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBooking}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-magenta-500 text-background font-bold rounded-lg hover:from-cyan-400 hover:to-magenta-400 transition-all"
            >
              Confirm Booking
            </motion.button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
