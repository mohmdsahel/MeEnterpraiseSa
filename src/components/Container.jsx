import React from 'react';
import { motion } from 'framer-motion';

const StatsBox = ({ label, num }) => {
  return (
    <motion.div
      className="stats__box p-4 border border-n-6 rounded-lg relative overflow-hidden"
      whileHover="hover"
      initial="initial"
    >
      <motion.div
        className="absolute inset-0 bg-purple-500 z-0"
        variants={{
          initial: { y: '100%' },
          hover: { y: '0%' },
        }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      ></motion.div>
      <motion.div
        className="relative z-10 text-black"
        variants={{
          hover: { color: '#000000' },
          initial: { color: '#ffffff' },
        }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <div className="stats__box-label text-lg font-semibold">{label}</div>
        
        <div className="line black h-0.5 bg-white my-2"></div>
        <div className="stats__box-num text-2xl font-bold">{num}</div>
        
      </motion.div>
    </motion.div>
  );
};

const Stats = () => {
  return (

    <div className="stats grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatsBox
        label=" AI & Analytics Thought Leaders "
        num="15"
      
      />
    
      <StatsBox
        label="LIVE/Tech DEMOS/EXHIBITORS"
        num="15"
        />
      <StatsBox
        label="INDUSTRY LEADERS ATTENDING"
        num="300"
        />
      <StatsBox
        label="HOURS OF INSIGHTFUL SESSIONS"
        num="7"
          />
    </div>
  );
};

export default Stats;