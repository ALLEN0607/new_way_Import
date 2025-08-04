"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.section       /* ← 这里改成 motion.section */
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
      className="bg-black text-white py-20"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6">

        {/* ---------- 标题 ---------- */}
        <div className="text-center space-y-3">
          <h2 className="text-4xl font-extrabold tracking-wide sm:text-5xl">
            NEW WAY IMPORT INC
          </h2>
          <p className="text-lg text-gray-300">新城国际贸易公司</p>
        </div>

        {/* ---------- 主体：左右双栏 ---------- */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* 左：文字块 */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            {/* 联系方式 */}
            <div className="space-y-2 text-sm sm:text-base">
              <p>📍 333 W Garvey Ave B628, Monterey Park, CA 91754</p>
              <p>☎️ 626-863-5595 / 626-379-4788</p>
              <p>📠 626-941-6226</p>
              <p>✉️ newwayimport1688@gmail.com</p>
            </div>

            {/* 分割线 */}
            <div className="h-px w-full bg-gradient-to-r
                            from-orange-600/0 via-orange-600 to-orange-600/0" />

            {/* 中英简介 */}
            <div className="space-y-6 leading-8 text-gray-300">
              <p>
                新城国际贸易公司（New Way Import Inc.）位于美国洛杉矶，
                从事亚洲食品进口十多年，一直为海外华人采购各类食品、
                粮油杂货，供应美国各大亚洲超市及电商平台。
              </p>
              <p>
                Our company is located in Los Angeles. We have been importing
                Asian food for more than ten years, providing a wide range of
                food, grain and groceries for overseas Chinese, and supplying
                major Asian supermarkets and e-commerce platforms across the
                United States.
              </p>
            </div>
          </motion.div>

          {/* 右：两张图片预留位 */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {/* 图片 1 —— 替换 src 为正式 URL 或 /images/... */}
            <div className="relative h-56 w-full overflow-hidden rounded-xl">
              <img
                src="warehouse_2.png"
                alt="Company warehouse"
                className="h-full w-full object-cover"
              />
            </div>

            {/* 图片 2 */}
            <div className="relative h-56 w-full overflow-hidden rounded-xl lg:translate-x-10">
              <img
                src="warehouse.png"
                alt="Product showcase"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
