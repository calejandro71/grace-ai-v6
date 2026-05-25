/* ==========================================================================
   GRACE KNOWLEDGE CACHE
   ==========================================================================
   The cheapest, fastest way Grace answers. Every entry here is $0 (no API call)
   and instant. Sourced and adapted from Annuity Alliance's own Resource Center
   (Beginner / Intermediate / Advanced sections) plus common consumer questions.

   HOW TO ADD A NEW ANSWER
   1. Copy an existing block.
   2. Give it a unique `id`.
   3. List `keywords` — short, lowercase phrases a user might type or say.
      More natural phrasings = more often answered free (instead of a handoff).
   4. Write `answer` in Grace's voice. RULES:
        - NEVER recommend a product or say "you should" / "I'd suggest".
        - NEVER give financial, tax, or legal advice — defer to a specialist.
        - Explain the concept, then (when natural) offer to show matching
          products or connect a licensed specialist.
        - Use <em>...</em> for emphasis (renders italic gold).
        - Keep it to 2-5 warm, plain-English sentences.

   `tier` is optional metadata (beginner|intermediate|advanced) for your own
   reference; it doesn't affect matching.
   ========================================================================== */

const KNOWLEDGE = [

  /* =====================================================================
     BEGINNER
     ===================================================================== */
  {
    id: 'what_is_annuity', tier: 'beginner',
    keywords: ['what is an annuity','what are annuities','explain annuity','annuity mean','define annuity','annuity definition'],
    answer: "An annuity is a contract between you and an insurance company that lets your money grow tax-deferred, then pays it back to you as income. The word literally means \"annual payments.\" You can take that income monthly, quarterly, yearly, or as a lump sum — and it can start right away (an <em>immediate</em> annuity) or after a growth period (a <em>deferred</em> annuity). People mainly use them for steady, often guaranteed, retirement income. Want me to walk you through the types, or are you leaning toward a goal like income or safety?"
  },
  {
    id: 'how_annuities_work', tier: 'beginner',
    keywords: ['how do annuities work','how does an annuity work','accumulation phase','payout phase','how it works'],
    answer: "An annuity has two phases. During the <em>accumulation phase</em>, your money grows tax-deferred. During the <em>payout phase</em>, the insurer pays you income — either for a set number of years or for the rest of your life. With an immediate annuity, payout starts right away; with a deferred annuity, you let it grow first and decide later when to turn on income. Want me to show you products that fit when you'd want income to begin?"
  },
  {
    id: 'annuity_structure', tier: 'beginner',
    keywords: ['how is an annuity structured','parties to an annuity','owner annuitant beneficiary','who is the annuitant','what is the owner'],
    answer: "There are usually four parties: the <em>owner</em> (controls the contract, names the beneficiary, makes withdrawals, and gets the tax deferral), the <em>annuitant</em> (the person whose life the contract is measured on — often the same as the owner), the <em>beneficiary</em> (who receives the death benefit), and the <em>insurance carrier</em> (who backs it all). In most personal annuities the owner and annuitant are the same person. Anything specific you'd like me to clarify here?"
  },
  {
    id: 'types', tier: 'beginner',
    keywords: ['types of annuit','kinds of annuit','what types','different annuit','categories of annuit','main types','deferred vs immediate','immediate vs deferred'],
    answer: "At the broadest level there are two: <em>immediate</em> annuities, where income starts right away, and <em>deferred</em> annuities, where your money grows first and you choose when to take income later. Within those, the money can grow in different ways — fixed, fixed-index, or variable. Which sounds closest to what you're after — income now, or growth for later?"
  },
  {
    id: 'fixed_vs_index_vs_variable', tier: 'beginner',
    keywords: ['fixed vs index','fixed vs variable','difference between fixed','fixed indexed variable','types compared','what kind of annuity'],
    answer: "They differ in how they earn and how much risk you take. A <em>fixed</em> annuity pays a guaranteed interest rate — you always know what you're earning. A <em>fixed-index</em> annuity ties growth to a market index like the S&P 500 with a 0% floor, so you get upside potential while your principal stays protected from market drops. A <em>variable</em> annuity invests in sub-accounts for higher potential return but real risk of loss, and is sold only by securities-licensed reps. Which of those fits how you feel about risk? I can pull up matching products."
  },
  {
    id: 'fia', tier: 'beginner',
    keywords: ['fixed index','fixed-index','fia','index annuit','indexed annuit','equity indexed','how does a fixed index'],
    answer: "A fixed-index annuity is a type of fixed annuity where your interest is tied in part to a market index like the S&P 500. As interest is credited, it locks in — so future market downturns can't take it away — and your principal stays protected. You get some of the upside of a rising market with the security of a traditional fixed annuity. If you tell me your state, age, and roughly how much you're considering, I can pull up the FIAs that fit and show their current rates."
  },
  {
    id: 'what_annuity_can_do', tier: 'beginner',
    keywords: ['what can an annuity do','benefits of an annuity','why buy an annuity','what are annuities good for','advantages'],
    answer: "Three big things. <em>Growth potential</em> — a fixed-index annuity can earn more than a traditional fixed annuity, with no direct downside market risk to your principal. <em>Peace of mind</em> — it can guarantee income for life, so you won't outlive your money. And <em>filling the gaps</em> — when Social Security, a pension, or IRAs don't quite cover the retirement you want, an annuity can supplement that income. Want me to show you products lined up with whichever of those matters most to you?"
  },
  {
    id: 'main_advantages', tier: 'beginner',
    keywords: ['main advantages','biggest advantage','pros of annuities','upsides','why are annuities good'],
    answer: "The headline advantage is guaranteed income — only an insurance-company annuity can guarantee lifetime and beneficiary income payments. On top of that: there's no annual contribution limit on a non-qualified annuity (helpful if you're catching up close to retirement), your money compounds tax-deferred, and you can structure payouts as a lump sum or a steady income stream. It works as a complement to Social Security and pensions. Want to see products that lean into guaranteed income?"
  },
  {
    id: 'main_disadvantages', tier: 'beginner',
    keywords: ['disadvantages','downside','cons of annuities','drawbacks','what are the negatives','bad about annuities'],
    answer: "The honest tradeoffs: <em>surrender charges</em> if you pull money out in the early years (they decline over time, but some contracts start high), and <em>fees</em> — especially on variable annuities, where insurance, management, and rider costs can stack up to 2-3% a year. There's also a 10% IRS penalty on withdrawals before age 59½, like an IRA. Fixed and fixed-index annuities tend to be much leaner on fees. Want me to show you lower-cost options that match what you're looking for?"
  },
  {
    id: 'pros_and_cons', tier: 'beginner',
    keywords: ['pros and cons','pros cons','advantages and disadvantages','good and bad','upsides and downsides'],
    answer: "In short — the pros are tax-deferred growth, guaranteed income you can't outlive, and reliable returns. The cons are limited liquidity (surrender periods), sometimes-complex contracts, and fees that can be high on variable products. Fixed and fixed-index annuities keep the pros while minimizing the fee drawback. Want me to pull up options so you can weigh them against your goals?"
  },
  {
    id: 'good_retirement_product', tier: 'beginner',
    keywords: ['good retirement product','good for retirement','annuity for retirement','is an annuity good','worth it for retirement'],
    answer: "For a lot of people, yes — an annuity gives you the certainty of an agreed-upon income for life, and for a spouse too with a joint-and-survivor option. A fixed annuity pays a steady stream while you live; an immediate annuity turns a lump sum into income right away. Whether it's right for <em>your</em> situation is something a licensed specialist reviews with you. Want me to show you what's available so you have real numbers to consider?"
  },
  {
    id: 'when_right_for_me', tier: 'beginner',
    keywords: ['when is an annuity right','is an annuity right for me','right for me','should i get an annuity','do i need an annuity','make sense for me'],
    answer: "Annuities tend to fit well in a few situations: you're already maxing out other retirement plans like an IRA or 401(k) and want more tax-deferred growth; you don't expect to need the money before 59½; or you're worried about outliving your savings and want guaranteed lifetime income. Whether it fits <em>you</em> specifically is a licensed specialist's call after reviewing your full picture. Want to tell me what you're hoping to accomplish so I can show relevant products?"
  },
  {
    id: 'when_to_buy', tier: 'beginner',
    keywords: ['when should i buy','best time to buy','what age to buy','too old to buy','too young'],
    answer: "The most common window is your 50s or 60s, when planning how you'll replace your paycheck becomes a priority. That said, many annuities are available from age 18 well into the 80s — some carriers limit new contracts past 80 or require beneficiary protection. Income features like riders often work best when started in your 50s or 60s. If you share your age, I'll only show you products you'd actually qualify for."
  },
  {
    id: 'who_sells', tier: 'beginner',
    keywords: ['who can sell','who sells annuities','who issues','licensed to sell','can anyone sell','do i pay commission','sales compensation'],
    answer: "Annuities are issued by insurance companies but usually sold through licensed insurance professionals who've completed product-specific training and hold a valid license in your state. Importantly, the agent is paid by the insurance company — <em>no</em> sales commission is ever deducted from your annuity principal. So the full amount you put in goes to work for you. Want me to connect you with a licensed specialist when you're ready?"
  },
  {
    id: 'how_to_purchase', tier: 'beginner',
    keywords: ['how to purchase','how do i buy','ways to purchase','how to fund','fund an annuity','pay for an annuity'],
    answer: "Usually you fund an annuity by personal check, but there are tax-smart ways to move existing money in: a rollover from an IRA, 401(k), or qualified employer plan; a <em>1035 exchange</em> from another deferred annuity (in full or part); or a 1035 exchange of the cash value of a life insurance policy. Those let you move money without triggering taxes. Want me to show products that accept rollover or 1035 money?"
  },
  {
    id: 'which_monies', tier: 'beginner',
    keywords: ['which money should i use','what money to use','where should the money come from','what funds','source of funds'],
    answer: "Premiums often come from retirement savings, an existing deferred annuity, or a lump sum from a life event — an inheritance, the sale of a home or business, or life-insurance proceeds. A good rule of thumb is to fund from assets that won't force you to realize a taxable gain. Some sources stay tax-advantaged, like a 1035 exchange from another annuity, home-sale gains within the exclusion limits, or inherited assets that get a step-up in basis. The specifics depend on your situation — a specialist can map it out. Want me to set that up?"
  },
  {
    id: 'percentage_of_savings', tier: 'beginner',
    keywords: ['what percentage','how much of my savings','how much should i put','portion of retirement','allocation'],
    answer: "There's no one-size answer — it depends on how much guaranteed income you want, when and for how long, your risk tolerance, and your other guaranteed income like Social Security or a pension. Because the guaranteed-income piece is so valuable, many people treat an annuity as one part of a broader resource-allocation plan rather than an all-or-nothing decision. A licensed specialist can help you size it to your situation. Want me to connect you?"
  },
  {
    id: 'payout_options', tier: 'beginner',
    keywords: ['payout options','income options','how do i get paid','payment options','distribution options','how payments work'],
    answer: "Whether you buy an immediate annuity or convert a deferred one, the options are similar: payments monthly, quarterly, semi-annually, or annually; for a set period of years or guaranteed for life. You can also choose when payments arrive — \"in advance\" (from the start date), \"in arrears\" (a period after), or on a chosen monthly date. Joint-and-survivor options keep income going for a spouse. Want me to show products and the income each option could produce?"
  },
  {
    id: 'access_money', tier: 'beginner',
    keywords: ['access my money','withdraw money','how do i get my money','take money out','free withdrawal','systematic withdrawal','liquidity'],
    answer: "Most annuities let you withdraw a set amount each year — commonly 10% to 15% of the accumulated value — without a company withdrawal charge, though income tax still applies. Another option is a <em>systematic withdrawal plan</em>: a steady stream of income you can start, stop, increase, or decrease as your needs change, without giving up control the way annuitization would. Withdrawals before 59½ may carry a 10% IRS penalty. Want me to filter for products with flexible withdrawal terms?"
  },
  {
    id: 'charges', tier: 'beginner',
    keywords: ['charges','what charges','fees involved','what fees','cost to buy','load','initial commission'],
    answer: "Many fixed annuities have no upfront commission or load — instead the main cost is a <em>surrender charge</em> if you cash out or transfer within the first 5-10 years, often with a penalty-free withdrawal allowance (commonly 10%) after year one. Variable annuities tend to carry higher ongoing expenses through their sub-accounts. Always ask about every fee before you commit. Want me to show you the specific costs on products that match your filters?"
  },
  {
    id: 'select_company', tier: 'beginner',
    keywords: ['select the right company','which insurance company','how to choose a company','best company','which carrier','company ratings'],
    answer: "It's a competitive market with hundreds of carriers, and for the same type of annuity, purchase rates can differ by 5-10% — so the choice matters. Two things to weigh: the rate, and the carrier's financial-strength rating from agencies like A.M. Best (look for at least \"A-: Excellent\"). Since product features are often similar, many people start with the best rate from a strongly rated company. I show carrier ratings on every product — want me to pull up top-rated options in your state?"
  },
  {
    id: 'guaranteed', tier: 'beginner',
    keywords: ['is my annuity guaranteed','is it guaranteed','guaranteed','backed by','what if the company fails','insurance company fails','state guaranty','am i protected'],
    answer: "An annuity's guarantees are backed by the financial strength of the issuing insurance company — it's not FDIC-insured like a bank account. As a backstop, every state has a guaranty association that provides protection if an insurer fails, usually up to $250,000 of an annuity's value (it varies by state). That's why buying from a strongly rated carrier matters. Want me to show you products from the highest-rated companies?"
  },
  {
    id: 'when_withdraw', tier: 'beginner',
    keywords: ['when can i withdraw','how soon can i withdraw','withdrawal age','59','early withdrawal'],
    answer: "You can generally begin withdrawing without the IRS's early-withdrawal penalty at age 59½. Separately, your contract may have a <em>surrender period</em> — a set number of years during which pulling out more than the allowed amount triggers a surrender charge from the insurer. So there are two clocks: the IRS age rule and the contract's surrender schedule. Want me to filter for products with shorter surrender periods?"
  },
  {
    id: 'minimum', tier: 'beginner',
    keywords: ['minimum','how much do i need','minimum investment','minimum to start','least i can put','minimum premium'],
    answer: "Most carriers require a minimum premium, and it varies by product — some start as low as $5,000-$10,000, while others (often those with the richest bonuses) start at $25,000 or more. Some flexible-premium annuities even let you add money over time. If you share roughly how much you're considering, I'll only show products you actually qualify for. What range are you thinking?"
  },
  {
    id: 'cancel_free_look', tier: 'beginner',
    keywords: ['can i cancel','cancel my annuity','free look','right to return','change my mind','cooling off'],
    answer: "Yes — most states give you a <em>free look period</em> (often around 30 days, varies by state) after you buy. If you decide it's not right during that window, you can return the contract and get all your money back. After the free look period, surrendering early would be subject to a surrender charge. The free look terms are spelled out in your contract, so it's worth reading during that window. Anything else you'd like to know?"
  },
  {
    id: 'death_benefit', tier: 'beginner',
    keywords: ['death benefit','what happens when i die','what happens if i die','when i die','when i pass','after i die','after i pass','beneficiary','beneficiaries','inherit','heirs','estate','leave to my','leave money','leave money to my kids','my family','my children','my kids'],
    answer: "When the annuity owner dies, the contract pays a death benefit to your named beneficiary — and naming a beneficiary means the money can pass outside of probate, which is a big plus for many people. The exact outcome depends on the payout option you chose: some continue payments to a spouse (a spousal continuation benefit), some pay remaining value to beneficiaries, and lifetime-only options stop at death. If a contract has no death benefit, remaining assets go to the insurer. Want me to show products with strong death-benefit features?"
  },
  {
    id: 'income_rider_intro', tier: 'beginner',
    keywords: ['income rider','what is a rider','guaranteed income rider','lifetime income rider','rider'],
    answer: "An income rider is an optional benefit you can add to some deferred annuities (originally on variable annuities, now common on fixed-index ones too) that guarantees a lifetime income stream. It grows a separate \"income base\" by a set rate each year you wait, then pays out based on your age. There's usually a small annual cost. Want me to show products with strong income riders? Just let me know your state and age."
  },

  /* =====================================================================
     INTERMEDIATE
     ===================================================================== */
  {
    id: 'die_before_income', tier: 'intermediate',
    keywords: ['die before income','die before i start','die before payments','what if i die before','pass before income'],
    answer: "If you pass away before turning on income, your account value passes to the beneficiary (or beneficiaries) you named — they receive the death benefit you elected. That's one reason naming a beneficiary matters: it keeps things out of probate. Want me to show products with the death-benefit options that handle this well?"
  },
  {
    id: 'surrender_or_emergency', tier: 'intermediate',
    keywords: ['no longer want','need the funds','emergency','surrender the annuity','get out of my annuity','cash out early','need my money'],
    answer: "You have a couple of paths. You can surrender the annuity, though a surrender charge may apply — and if you're under 59½ with a tax-qualified annuity, there's also a 10% IRS penalty. Or you can do a <em>1035 exchange</em> into another annuity, which avoids tax and penalty, but be aware it may restart the surrender clock and could involve a new commission. Because the tradeoffs are situation-specific, this is a good one to walk through with a specialist. Want me to set that up?"
  },
  {
    id: 'fia_features', tier: 'intermediate',
    keywords: ['fixed index features','indexing method','participation rate','cap rate','floor','spread','margin','vesting','averaging','crediting features'],
    answer: "The two features that affect a fixed-index annuity's interest most are the <em>indexing method</em> and the <em>participation rate</em>. Quick tour: the <em>participation rate</em> is how much of the index's gain counts (70% of a 10% gain = 7%); a <em>cap</em> is the maximum credited (a 6% cap on that 7% gives you 6%); the <em>floor</em> is the minimum, usually 0%, so a down market credits zero, never negative; a <em>spread/margin</em> is a percentage subtracted from the gain; and <em>vesting</em> affects how much index interest you keep if you leave before the term ends. Want me to show products and their current caps and participation rates?"
  },
  {
    id: 'crediting_methods', tier: 'intermediate',
    keywords: ['crediting method','annual reset','point to point','high water mark','low water mark','ratcheting','how interest is credited','index-linked interest'],
    answer: "There are a few common ways the index interest is calculated. <em>Annual reset</em> compares the index at the start and end of each year and locks in gains annually. <em>Point-to-point</em> compares the start and end of the whole term. <em>High-water mark</em> uses the highest anniversary value during the term; <em>low-water mark</em> uses the lowest point before the end. Each has tradeoffs between how soon interest locks in and how high the participation rate can be. Want me to pull up products so you can compare their methods?"
  },
  {
    id: 'annuitization', tier: 'intermediate',
    keywords: ['annuitization','annuitize','what is annuitization','rider vs annuitization','difference between rider and annuit'],
    answer: "Annuitization is when the insurer begins paying out your annuity as a guaranteed income stream — and it's a permanent decision. Once annuitized, it can't be reversed and you can no longer withdraw the principal; you've exchanged the lump sum for guaranteed income, which makes it quite inflexible. That's different from an <em>income rider</em>, which gives lifetime income while keeping more access and flexibility. Want me to show products so you can compare the income each approach produces?"
  },
  {
    id: 'current_vs_guaranteed_rate', tier: 'intermediate',
    keywords: ['current rate vs guaranteed','current rate','guaranteed rate','minimum rate','renewal rate','what rate'],
    answer: "The <em>guaranteed rate</em> is written into the contract — typically the minimum the annuity will ever pay you. The <em>current rate</em> is usually higher, paid at the company's discretion, and isn't contractual; the insurer sets it and can change it. So the guaranteed rate is your floor, and the current rate is what you're earning today. Want me to pull up products and show both their current and guaranteed rates?"
  },
  {
    id: 'factors_affecting_income', tier: 'intermediate',
    keywords: ['factors influence income','what affects income','what determines income','how is income calculated','income depends on','payout factors'],
    answer: "Several things move the income number. <em>Age</em> — the younger you are, the longer the expected payout, so the lower each payment. <em>Gender</em> — actuarially, males often get slightly higher payments. <em>Features</em> — the more guarantees you add (like a period-certain), the lower the payout. And <em>interest rates</em> — buying when rates are higher means more income. Some people spread purchases over several years to smooth out rate timing. Share your age and amount and I'll show you real income figures from matching products."
  },
  {
    id: 'riders_not_all_same', tier: 'intermediate',
    keywords: ['are income riders the same','riders different','compare riders','income rider comparison','best income rider','rider differences'],
    answer: "No — and this is important. Income riders are unique to each carrier and sometimes to each product, so two riders can behave very differently. A key detail: the rider's growth might be <em>simple</em> or <em>compound</em> interest, which can make a big difference over time. It pays to compare the contractual guarantees and limitations across carriers. That's exactly the kind of side-by-side a licensed specialist does well — want me to show you products with riders, then connect you?"
  },
  {
    id: 'rider_costs', tier: 'intermediate',
    keywords: ['rider cost','cost of a rider','how much is a rider','rider fee','rider charge'],
    answer: "Most riders carry a premium cost, often for the life of the policy, typically deducted from the accumulation (investment) value on the contract anniversary. A nice feature of the rider strategy: that fee doesn't come out of the rider's own income value — so the income base keeps growing. Costs vary by carrier and product. Want me to show products with riders and their specific costs?"
  },
  {
    id: 'reporting_taxes', tier: 'intermediate',
    keywords: ['report taxes','cash value increases','tax reporting','1099','do i report','report interest'],
    answer: "You don't report or pay tax on credited interest while it stays inside the annuity — that's the tax-deferral benefit. Once you begin receiving income, the insurer issues you an IRS Form 1099 for reporting. For how this applies to your specific tax situation, a tax professional is the right call. Want me to keep going on how the products work?"
  },
  {
    id: 'retiree_immediate', tier: 'intermediate',
    keywords: ['should a retiree buy immediate','immediate annuity for retiree','lump sum to income','retiree immediate annuity'],
    answer: "An immediate annuity can make sense for a retiree who wants to turn a lump sum into guaranteed lifetime payments, and part of each payment is a tax-free return of principal. The risks to weigh: level payments don't guard against inflation, and a life-only option is a bet on longevity. You can hedge with a \"period certain,\" a joint-and-survivor option, or a refund feature so beneficiaries aren't left out. Some contracts even offer cost-of-living increases. Want me to show immediate-income products and what they'd pay?"
  },
  {
    id: 'approaching_80', tier: 'intermediate',
    keywords: ['approaching 80','over 80','older than 80','age 80','elderly','buying at an older age'],
    answer: "Age, health, and longevity expectations all matter more as you approach 80. Many carriers won't issue annuities past 80, or they'll require beneficiary protection if they do. The good news: annuities don't require health underwriting like life insurance. If health or life expectancy is a concern, options with beneficiary protection — such as a life-with-100%-refund feature — can make sense even before 80. A specialist can match you to carriers that fit your age. Want me to set that up?"
  },

  /* =====================================================================
     ADVANCED
     ===================================================================== */
  {
    id: 'investment_options', tier: 'advanced',
    keywords: ['investment options','what can i invest in','sub-accounts','sub accounts','how is it invested','choose investments'],
    answer: "It depends on the type. With a <em>fixed</em> annuity, you don't pick investments — the insurer does and pays you a set return. With a <em>variable</em> annuity, you allocate among sub-accounts (essentially mutual funds) and your value rises and falls with them, with higher fees than ordinary funds. Fixed-index annuities sit in between: index-linked growth with principal protection. Want me to show the principal-protected options that match your filters?"
  },
  {
    id: 'health_impact', tier: 'advanced',
    keywords: ['health impact','my health','poor health','shorter life expectancy','health and annuities','if im not healthy'],
    answer: "Insurers price lifetime annuities assuming buyers are in good health, so if you have a shorter life expectancy, a pure life annuity may not be the best value. Alternatives include a fixed-period annuity (say 5, 10, or 20 years) for guaranteed income without the longevity bet. For couples where one spouse is in poor health, sometimes a life annuity on the healthier spouse plus a period-certain annuity on the other works well. A specialist can tailor this — want me to connect you?"
  },
  {
    id: 'exchange_existing', tier: 'advanced',
    keywords: ['exchange my annuity','should i exchange','1035 exchange','swap my annuity','replace my annuity','unhappy with my annuity'],
    answer: "Be cautious here. A 1035 exchange lets you move to a new annuity without triggering taxes, which sounds great — but it often starts a <em>new</em> surrender period. If you've held your current annuity long enough to be past its surrender charges, swapping could lock you into another 10-year schedule. Read every document and understand all the fees before moving. Because the math is situation-specific, this is worth reviewing with a specialist. Want me to set that up?"
  },
  {
    id: 'use_401k', tier: 'advanced',
    keywords: ['use 401k','401k distribution','buy with 401k','401k to annuity','employer plan annuity'],
    answer: "Many 401(k) plans offer annuity options, though usually with little guidance. If you elect one, plans often require you to choose around the joint-and-survivor rules so payments can continue to a spouse. Before taking the in-plan option, it's smart to also shop the broader commercial annuity market — there may be better rates and more options. A specialist can compare your plan's option against the open market. Want me to help with that?"
  },
  {
    id: 'annuity_in_ira', tier: 'advanced',
    keywords: ['annuity within ira','annuity in my ira','hold an annuity in ira','ira annuity','qualified annuity in ira'],
    answer: "It can make sense — the main draw is tax-deferred growth, and if you're at or near retirement and want more guaranteed income than Social Security provides, using part of an IRA or 401(k) to buy an immediate annuity for lifetime income can fit. The safety and predictability of a fixed annuity appeals to many here. Keep in mind required minimum distributions start at the IRS's mandated age. Want me to show products that work inside an IRA?"
  },
  {
    id: 'leave_to_heirs', tier: 'advanced',
    keywords: ['leave money to heirs','leave to my heirs','inheritance planning','legacy','pass to heirs','heirs and taxes'],
    answer: "An annuity can pass to your heirs, but they'll owe income tax on the gains you deferred during your lifetime — which can actually work in their favor if they're in a lower tax bracket. The annuity's value may also be part of your taxable estate. How it fits an estate plan is genuinely an attorney-and-specialist question. Want me to show products with strong legacy/death-benefit features, then connect you with someone who can structure it?"
  },
  {
    id: 'when_to_annuitize', tier: 'advanced',
    keywords: ['when to annuitize','decision to annuitize','why annuitize timing','timing of annuitization'],
    answer: "It's a big decision because it's irreversible. Once you annuitize and start regular income payments, the contract pays as specified — there's no flexibility to raise or lower payments, and no cash withdrawals from the principal afterward. That permanence is exactly why the timing deserves careful thought with a specialist. Want me to show income products and what they'd pay before any commitment?"
  },
  {
    id: 'add_rider_to_existing', tier: 'advanced',
    keywords: ['add a rider','add income rider to existing','rider on existing policy','attach a rider later'],
    answer: "No — income riders have to be chosen when you apply, and they can't be added after the annuity is issued. A rider is an attached benefit that solves for a specific need like income, legacy, or confinement care, so it's baked in at the start. If you want rider benefits, the move is to look at a new contract that includes one. Want me to show products that offer the rider you're interested in?"
  },
  {
    id: 'how_riders_calculated', tier: 'advanced',
    keywords: ['how income riders work','calculate income rider','rider growth','roll up rate','income base','rider math','6% compound'],
    answer: "Most income riders guarantee an annual growth amount on a separate \"income base\" that can only be used for income — for example, 6% compounded annually for as long as you defer, with that high growth rate stopping once you turn on lifetime income. You can't withdraw or transfer that 6% like CD interest; it's specifically for calculating your income. Your statement will show three different numbers: accumulation value, surrender value, and rider value. There's generally a cost for the rider. Want me to show products with strong rider growth rates?"
  },
  {
    id: 'cola_vs_cpi', tier: 'advanced',
    keywords: ['cost of living','cola','cpi','inflation adjustment','increasing payments','keep up with inflation','rising payments','inflation'],
    answer: "Some annuities increase your income each year — either tied to a cost-of-living index (often capped) or by a fixed percentage like 2% annually. The tradeoff: for the same premium, an inflation-adjusting annuity starts with <em>lower</em> payments, and it takes some years before the rising payments overtake what a level-payment annuity would have paid. Which matters more to you, higher income now or rising income later? I can show products with COLA options either way."
  },
  {
    id: 'transfer_tax_free', tier: 'advanced',
    keywords: ['transfer without taxes','transfer annuity tax free','move annuity tax free','tax-free transfer','company to company'],
    answer: "Yes — while the annuity is still in its accumulation phase, the IRS allows tax-free transfers between annuities (a 1035 exchange). The catch isn't taxes; it's that your <em>current</em> company may charge surrender fees, and a new contract may start a fresh surrender period. Always check your existing contract before transferring. Want me to walk through products you could transfer into, then connect you with a specialist to handle the mechanics?"
  },
  {
    id: 'spda_exchange', tier: 'advanced',
    keywords: ['spda','single premium deferred','exchange my spda','convert spda'],
    answer: "A Single Premium Deferred Annuity is built to grow your savings tax-deferred and can be converted into guaranteed income whenever you choose. You're not required to take income from the same company that issued it — so it's worth getting competitive quotes elsewhere. Benefits of converting to income can include securing lifetime income, excluding part of each payment from tax, and locking in long-term rates. Since it can affect liquidity, do it thoughtfully. Want me to pull up income options and connect you with a specialist?"
  },
  {
    id: 'beneficiary_taxes', tier: 'advanced',
    keywords: ['beneficiary taxes','heirs pay tax','tax on inherited','what tax will my beneficiaries','estate tax on annuity'],
    answer: "A few principles: income tax applies to annuity payments your beneficiaries receive, on the same basis they'd have applied to you — but there's no 10% early-withdrawal penalty regardless of anyone's age. For estate tax, the present value of remaining payments at your death is part of your estate, though amounts passing to a surviving spouse or to charity generally escape it. This is real attorney-and-tax-professional territory. Want me to connect you with a specialist who can coordinate that?"
  },
  {
    id: 'inherited_annuity_options', tier: 'advanced',
    keywords: ['inherited annuity','distribution options for inherited','i inherited an annuity','options for an inherited annuity','beneficiary distribution options'],
    answer: "It depends on whether you're the surviving spouse or not. A surviving spouse can usually treat the annuity as their own, keeping all the original options. A non-spouse beneficiary generally has three: a lump-sum payout, full payout over five years, or (elected within 60 days) annuitizing over their own lifetime. If payments had already begun, you must continue them at least as fast as the original owner. Gains stay taxable as ordinary income; with after-tax money, part of each payment is a tax-free return of principal. A specialist can walk you through your specific options — want me to connect you?"
  },
  {
    id: 'qualified_vs_nonqualified', tier: 'advanced',
    keywords: ['qualified vs non-qualified','qualified annuity','non-qualified annuity','qualified or nonqualified','pre-tax vs after-tax','difference qualified'],
    answer: "A <em>qualified</em> annuity is funded with pre-tax money from a retirement plan like a Traditional IRA, Roth IRA, SEP-IRA, or 403(b), so it follows those tax rules. A <em>non-qualified</em> annuity is funded with after-tax money — savings, a home sale, stock proceeds, and so on. Both grow tax-deferred and can offer guaranteed lifetime income; with a non-qualified annuity, only the earnings are taxed on the way out since you already paid tax on the principal. Both can carry the under-59½ penalty. Want me to factor your money source in when I show products?"
  },
  {
    id: 'why_tax_changed', tier: 'advanced',
    keywords: ['why did the tax change','tax on my annuity changed','tax withholding changed','tax tables'],
    answer: "Federal tax tables are set by Congress and administered by the IRS, and they're updated each year. The insurer holding your annuity can adjust your federal withholding based on the new tables and your marital status and exemptions. You can change your withholding amount at any time, and it's worth reviewing your federal and state withholding annually. For your specific numbers, a tax professional is the right resource. Anything else I can explain?"
  },
  {
    id: 'future_value', tier: 'advanced',
    keywords: ['future value','calculate future value','fv of an annuity','time value of money','how much will it grow'],
    answer: "The future value of an annuity is what all your contributions grow to at a given interest rate over time — and thanks to compounding, it's more than the simple sum of what you put in. The classic formula is FV = P × (((1+R)^N − 1) / R), where P is the payment, R the rate, and N the number of periods. The real takeaway is that compounding does heavy lifting over the years. Rather than hand-calculate, I can pull up products and show you projected values — want me to?"
  },

  /* =====================================================================
     CONCEPTS / DEFINITIONS
     ===================================================================== */
  {
    id: 'joint_annuitant_vs_beneficiary', tier: 'intermediate',
    keywords: ['joint annuitant vs beneficiary','joint annuitant','difference joint annuitant','what is a joint annuitant'],
    answer: "A <em>joint annuitant</em> is named on a joint-and-survivor annuity to keep receiving payments after the first annuitant dies — and their age and gender help set how long benefits last. Importantly, a joint annuitant can't be changed after purchase. A <em>beneficiary</em>, by contrast, receives a lump-sum death benefit or remaining payments after the annuitant (and joint annuitant) pass, and a beneficiary <em>can</em> be changed. Want me to show products with joint income options?"
  },
  {
    id: 'accumulation_phase', tier: 'beginner',
    keywords: ['accumulation phase','what is accumulation','growing phase','before payout'],
    answer: "The accumulation phase is the stretch of time when your annuity's value is growing, before any income begins. It ends the day the payout (annuitization or income) phase starts. During accumulation, your earnings grow tax-deferred. Want me to show deferred products that maximize this growth phase?"
  },
  {
    id: 'annuity_vs_life_insurance', tier: 'intermediate',
    keywords: ['annuity vs life insurance','difference life insurance','life insurance vs annuity','living too long','dying too soon'],
    answer: "Here's the neat way to think about it: life insurance protects against <em>dying too soon</em>, while an annuity protects against <em>living too long</em>. With a lifetime annuity, you get guaranteed periodic payments for as long as you live — so if you outlive your life expectancy, you may receive far more than you put in. They solve opposite problems. Want me to show income products that protect against outliving your savings?"
  },
  {
    id: 'variable_liquidity', tier: 'intermediate',
    keywords: ['how liquid are variable','variable annuity liquidity','variable annuity withdraw','liquid variable'],
    answer: "Variable annuities generally aren't considered liquid. Variable deferred annuities can carry IRS penalties for early withdrawals plus surrender charges, and variable immediate annuities only pay fixed monthly amounts — you can't pull out the lump sum. If liquidity matters to you, fixed and fixed-index options usually offer more flexible penalty-free withdrawal allowances. Want me to filter for products with better liquidity terms?"
  },
  {
    id: 'floor', tier: 'intermediate',
    keywords: ['what is the floor','floor of a fixed annuity','minimum guaranteed','0% floor'],
    answer: "The floor is the minimum guaranteed amount credited to your account. On a fixed-index annuity it's most often 0%, which means that even if the index falls, the index-linked interest you earn is zero — never negative. So your credited gains are protected on the downside. Want me to show fixed-index products and their floors and caps?"
  },
  {
    id: 'taxes_general', tier: 'beginner',
    keywords: ['how are annuities taxed','tax','taxes','taxed','tax deferred','tax deferral','do i pay tax','tax treatment','tax advantages'],
    answer: "Annuities grow tax-deferred — you're not taxed on the interest while it stays inside the contract, which lets it compound faster. When you take income, how it's taxed depends on the funding: with a non-qualified (after-tax) annuity, part of each payment is a tax-free return of principal and part is taxable earnings; with a qualified (pre-tax) annuity inside an IRA or 401(k), essentially the whole payment is taxable. Withdrawals before 59½ may add a 10% penalty. Tax specifics are personal, so confirm with a tax professional. Want me to keep going on the products themselves?"
  },
  {
    id: 'exclusion_ratio', tier: 'advanced',
    keywords: ['exclusion ratio','what is the exclusion ratio','tax-free portion','return of principal portion'],
    answer: "The exclusion ratio is the percentage of each non-qualified annuity payment that's excluded from income tax. It exists because part of every payment is a return of your already-taxed principal (tax-free) and part is interest earnings (taxable). Once you've recovered all your principal, further payments become fully taxable. It's a useful concept, but the exact figure for your contract is something a tax professional can confirm. Want me to keep explaining how the products work?"
  },

  /* =====================================================================
     META / TRUST / PROCESS
     ===================================================================== */
  {
    id: 'how_grace_works', tier: 'beginner',
    keywords: ['who are you','what are you','are you a person','are you real','are you a robot','are you ai','how do you work','can you give advice','can you recommend'],
    answer: "I'm Grace, an AI guide for Annuity Alliance. I'm here to explain how annuities work and pull up products that match what you're looking for — think of me as your knowledgeable starting point. The one thing I can't do is give personal recommendations or advice; that's the job of a licensed specialist, who reviews your specific situation and follows up. What would you like to explore?"
  },
  {
    id: 'talk_to_human', tier: 'beginner',
    keywords: ['talk to a person','talk to someone','speak to a human','real person','specialist','agent','advisor','call me','contact me','consultation'],
    answer: "Absolutely — a licensed annuity specialist can talk through your specific situation and answer anything I can't, with a free, no-obligation consultation. Once you've seen the products that match what you're looking for, you can request a call or have the details emailed to you, and a specialist will reach out. Want me to pull up matching products first, or set up the specialist contact now?"
  },
  {
    id: 'cost_to_use', tier: 'beginner',
    keywords: ['does this cost','is this free','what do you charge','free to use','catch','how do you make money','no obligation'],
    answer: "Talking with me and getting product information is completely free, with no obligation. Annuity Alliance works with licensed specialists nationwide who can help if you decide to move forward, and the carriers pay them — nothing comes out of your principal. There's no cost to explore your options or have a specialist reach out. What would you like to look at?"
  },
  {
    id: 'best_rate', tier: 'beginner',
    keywords: ['best rate','highest rate','top rate','best annuity','highest paying','who has the best','top paying','best deal'],
    answer: "Rates change often, and the \"best\" one depends on the type, term, your state, and your age — and I can't single one out as a recommendation, since that's a specialist's call. What I can do is pull up the current top rates among products that match your filters, so you can see them side by side. Share your state, age, and amount and I'll show you the strongest current options."
  },
  {
    id: 'how_long_takes', tier: 'beginner',
    keywords: ['how long does it take','how long to set up','process take','timeline to','when can i start','how fast'],
    answer: "It's usually quicker than people expect — once you've chosen a product with a specialist and submitted the paperwork, funding typically takes a couple of weeks, depending on how fast money transfers from your current institution. I can get you to the first step by showing matching products and connecting you with a specialist. Want to start there?"
  },
  {
    id: 'questions_to_ask', tier: 'intermediate',
    keywords: ['what questions should i ask','questions to ask an agent','what to ask','questions before buying','what should i ask'],
    answer: "Smart things to ask any agent: Is it single or multiple premium? Fixed, fixed-index, or variable? What's the initial rate and how long is it guaranteed? Is there a bonus, and what's the underlying rate? What's the guaranteed minimum? What are the surrender charges and how long do they last? Can I take penalty-free partial withdrawals? Are charges waived for nursing-home or terminal-illness situations? Is there a death benefit, and what income options can I choose? Want me to pull up products so you can ask these against real options — then connect with a specialist?"
  },
  {
    id: 'safety', tier: 'beginner',
    keywords: ['safe','safety','lose money','principal protect','no risk','protect my money','market crash','market drop','downturn','will i lose'],
    answer: "Safety is one of the biggest reasons people look at annuities. Fixed and fixed-index annuities protect your principal — you don't lose money when the market falls. Fixed-index annuities add the chance for some market-linked growth on top of that protection, locking in gains as they're credited. The guarantee rests on the issuing insurer, so its financial-strength rating matters. Want me to pull up principal-protected options from strongly rated carriers in your state?"
  },
  {
    id: 'vs_cd', tier: 'beginner',
    keywords: ['vs cd','versus cd','than cd','than a cd','compared to cd','cd or annuit','cd vs','my cd','beat a cd','beats a cd','better than my cd','cd maturing'],
    answer: "Both protect your principal, but they differ. A CD is FDIC-insured and short-term; a fixed annuity is backed by the insurer, often pays a higher guaranteed rate for a longer term, and grows tax-deferred until you withdraw. The tradeoff is the annuity's surrender period, so it's meant for money you won't need right away. Want me to pull up current fixed-annuity rates so you can compare them to your CD?"
  },
  {
    id: 'rmd', tier: 'intermediate',
    keywords: ['rmd','required minimum','minimum distribution','age 73','forced withdrawal','70 1/2'],
    answer: "Required Minimum Distributions are amounts the IRS requires you to withdraw from tax-deferred retirement accounts once you reach the mandated age. Some annuities are structured so their income payments can help satisfy your RMD. Because the rules depend on your specific accounts and the current IRS age threshold, this is a great one to confirm with a specialist or tax professional. I can show you RMD-friendly products if you tell me your state and age."
  },
  {
    id: 'rollover', tier: 'beginner',
    keywords: ['rollover','roll over','401k rollover','ira rollover','transfer my 401','move my ira'],
    answer: "You can often move money from a 401(k), IRA, or another annuity into a new annuity without triggering taxes — a direct rollover for retirement accounts, or a <em>1035 exchange</em> for annuity-to-annuity (and even life-insurance cash value). Done right, the money moves institution-to-institution and never passes through your hands. The mechanics matter, so a specialist usually handles the paperwork. Want me to show products that accept rollover or 1035 money?"
  },

  /* =====================================================================
     ADDED FROM Guardian / Wisconsin OCI / Fidelity (net-new concepts)
     ===================================================================== */
  {
    id: 'rila', tier: 'intermediate',
    keywords: ['rila','registered index-linked','registered index linked','index linked annuity','buffer annuity','structured annuity'],
    answer: "A registered index-linked annuity (RILA) ties your growth to a market index like the S&P 500, with more upside potential than a fixed-index annuity — but in exchange, it only limits losses rather than fully preventing them. So it sits between a fixed-index annuity (full principal protection, lower ceiling) and a variable annuity (full market risk). Because it can lose value and is a registered product, it's sold by prospectus through securities-licensed reps. Want me to show you where it fits next to the other types?"
  },
  {
    id: 'five_types', tier: 'beginner',
    keywords: ['5 types','five types','all the types','how many types','full list of types','what are the types'],
    answer: "There are five common types. <em>Immediate</em> — turns a lump sum into income right away. <em>Fixed</em> — a guaranteed rate of return. <em>Fixed-index</em> — index-linked growth with principal protection. <em>Registered index-linked (RILA)</em> — more index upside but only partial downside protection. And <em>variable</em> — invested in sub-accounts with full market risk and the highest growth potential. They differ mainly in how your money grows and how much risk you take. Which direction interests you — safety, growth, or income? I can pull up matching products."
  },
  {
    id: 'market_value_adjustment', tier: 'intermediate',
    keywords: ['market value adjustment','mva','what is an mva','market-value adjustment'],
    answer: "A market value adjustment (MVA) is a feature on some contracts that can raise or lower your value if you withdraw money early, based on how interest rates have moved. Generally, if rates have <em>fallen</em> since you bought, an MVA can work in your favor; if rates have <em>risen</em>, it can reduce what you take out. Every MVA formula is different, so the contract spells out the details. It only comes into play on early or excess withdrawals. Want me to flag which products carry an MVA when I show you options?"
  },
  {
    id: 'premium_types', tier: 'beginner',
    keywords: ['single premium','flexible premium','scheduled premium','multiple premium','one payment or many','can i add money'],
    answer: "Annuities are funded in one of a few ways. A <em>single premium</em> contract is funded with one lump sum — you can't add more later. A <em>multiple premium</em> contract lets you contribute over time, and comes in two flavors: <em>flexible</em> (pay what you want, when you want, within limits) and <em>scheduled</em> (set amounts on a set timetable). Which fits how you'd fund it — one lump sum, or contributions over time? I can filter products to match."
  },
  {
    id: 'income_option_life_only', tier: 'intermediate',
    keywords: ['life only','life-only','straight life','single life payout','life only option'],
    answer: "A <em>life-only</em> option pays you income for as long as you live — and because there's no guarantee to anyone after you, it produces the <em>highest</em> monthly payment of the standard options. The tradeoff: payments stop at your death, with nothing left to a beneficiary. People who want the largest possible check and don't need to leave that income to someone else often look at it. Want me to show what life-only would pay versus options that protect a beneficiary?"
  },
  {
    id: 'income_option_period_certain', tier: 'intermediate',
    keywords: ['period certain','life with period certain','guaranteed period','10 year certain','20 year certain','period-certain'],
    answer: "<em>Life with period certain</em> pays you for life, but also guarantees payments for a set number of years — often 10 or 20 — even if you pass away early. If you die within that window, your beneficiary keeps receiving payments for the rest of the period; if you outlive it, your payments simply continue. Because it adds a guarantee, each payment is a bit smaller than life-only. Want me to compare the payouts side by side?"
  },
  {
    id: 'income_option_joint_survivor', tier: 'intermediate',
    keywords: ['joint and survivor','joint survivor','survivor option','income for my spouse','spouse income','joint income option'],
    answer: "A <em>joint-and-survivor</em> option pays income as long as either you or your partner is alive, so the income doesn't stop when the first person passes. You can often choose to reduce the payment somewhat after the first death. Because it covers two lives, each payment is smaller than a life-only option — but it protects a surviving spouse, which many couples value. Want me to show what a joint-and-survivor payout would look like for your situation?"
  },
  {
    id: 'cash_refund', tier: 'intermediate',
    keywords: ['cash refund','refund feature','money back if i die','wont keep my money','installment refund','return of premium income'],
    answer: "A <em>cash refund</em> feature addresses a common worry: that the insurer keeps whatever's left if you die early. With it, when the last annuitant passes, your beneficiaries are refunded any difference between what you originally paid in and the payments you'd received — so your principal isn't lost. It does mean a slightly lower payment in exchange for that protection. Want me to show income products that offer a cash-refund option?"
  },
  {
    id: 'waiver_of_premium', tier: 'advanced',
    keywords: ['waiver of premium','disability waiver','if i become disabled','premium waiver'],
    answer: "A <em>waiver of premium</em> is an optional benefit on some contracts that pays your premiums for you if you become disabled, so your annuity keeps funding even if you can't. There's a charge for adding it. It's one of several riders carriers offer to handle specific what-if situations. Want me to show products that offer this kind of protection?"
  },
  {
    id: 'replacing_annuity', tier: 'advanced',
    keywords: ['replace my annuity','replacing an annuity','replacement','swap into a new annuity','trade in my annuity','should i replace'],
    answer: "Replacing one annuity with another is allowed, but worth real caution. You may lose value to surrender charges on the old contract, and you'll likely start a <em>brand-new</em> surrender period on the new one — so unless you'll hold the new annuity a long time, you could be better off keeping what you have. Regulations require a written notice and a fresh free-look period when you replace. It's smart to compare the costs and benefits of both contracts carefully, ideally with a specialist. Want me to set that up?"
  },
  {
    id: 'guaranty_fund', tier: 'intermediate',
    keywords: ['guaranty fund','guarantee fund','insurance security fund','insurer goes bankrupt','goes bankrupt','bankrupt','insurer insolvent','company goes under','state protection'],
    answer: "Every state has a safety net called a <em>guaranty fund</em> (in Wisconsin, the Insurance Security Fund) that pays claims if a member insurer becomes insolvent — funded by assessments on all licensed insurers in the state. Coverage limits vary by state, commonly around $250,000 of annuity value, and it shouldn't be treated as eliminating all risk, since some policies aren't fully covered and payouts can be delayed. It's a backstop, which is why a financially strong carrier matters most. Want me to show products from top-rated carriers?"
  },
  {
    id: 'who_shouldnt_buy', tier: 'intermediate',
    keywords: ['who should not buy','who shouldnt buy','not for everyone','when not to buy','is an annuity a bad idea','reasons not to'],
    answer: "Annuities aren't for everyone. They can be more complex and sometimes carry higher fees than products like mutual funds, and certain types (variable annuities especially) can lose value. If you already have plenty of reliable lifetime income — say a generous pension or steady rental income — you may not need what an annuity provides and might prioritize other investments. Whether it fits is genuinely individual, which is where a licensed specialist helps. Want me to walk through what an annuity would and wouldn't do for your situation?"
  },
  {
    id: 'is_it_a_good_investment', tier: 'beginner',
    keywords: ['is it a good investment','good investment','worth it','is an annuity worth','should i invest','is it a smart move'],
    answer: "Here's a simple way many people frame it: add up your expected essential expenses in retirement, then subtract your guaranteed income like Social Security or a pension. If there's a gap, an annuity is one way to help fill it. A common guideline is to limit an annuity to a portion of your savings — for example around 25% — so you keep other funds accessible for surprises. Whether it's right for <em>you</em> is a specialist's review, not my call. Want me to show options so you have real numbers to weigh?"
  },
  {
    id: 'gmab', tier: 'advanced',
    keywords: ['gmab','guaranteed minimum accumulation','return of principal guarantee','principal back guarantee','accumulation benefit'],
    answer: "A guaranteed minimum accumulation benefit (GMAB) is a feature on some variable annuities that guarantees the return of your original investment at the end of a set holding period — often 10 years — regardless of how the market performs, less any withdrawals. So you keep market-growth potential, but if things bottom out, you still get your principal back in full at the end of the period. The catch: it comes with a higher fee, and the guarantee only applies if you hold it the full period. Want me to show products that include this kind of protection?"
  },
  {
    id: 'glwb', tier: 'advanced',
    keywords: ['glwb','guaranteed lifetime withdrawal','lifetime withdrawal benefit','income for life rider','withdrawal benefit rider','income even if depleted'],
    answer: "A guaranteed lifetime withdrawal benefit (GLWB) is a rider on a fixed or variable annuity that guarantees income for life — even if the underlying account value is eventually drawn down to zero. On the variable version, you stay invested, and your income can <em>rise</em> with the markets but won't fall. You also keep access to your account value if circumstances change (though that reduces the guaranteed income). The longer you wait to start, the larger the payout tends to be. There's a cost for the rider. Want me to show products that offer a GLWB?"
  },
  {
    id: 'anchor_strategy', tier: 'advanced',
    keywords: ['anchor strategy','protect part of my money','split between safe and growth','combine safe and risky','barbell strategy'],
    answer: "The <em>anchor strategy</em> pairs a guaranteed piece with a growth piece. You put part of your money in something with a fixed return — like a fixed annuity or CD — to protect that principal, and invest the rest in growth-oriented holdings like stock funds. The aim is to keep the conservative portion safe while still leaving room for upside, which can ease the worry of market downturns. Want me to show fixed annuity options that could serve as the protected anchor?"
  },
  {
    id: 'mortality_pooling', tier: 'advanced',
    keywords: ['mortality pool','mortality pooling','longevity pool','how can it pay for life','how can it pay me for life','pay me for life','income for life work','where does lifetime income come from','longevity credits'],
    answer: "Lifetime income annuities work partly through <em>mortality pooling</em>. The insurer pools money from many annuitants; those who don't live as long effectively help fund payments for those who live longer. That pooling is what lets the insurer guarantee income you can't outlive — the longer you live, the more you may ultimately receive. It's the mechanism behind that \"income for life\" guarantee. Want me to show income products built on this and what they'd pay?"
  },
  {
    id: 'life_stage_continuum', tier: 'beginner',
    keywords: ['life stage','which annuity for my age','years from retirement','about to retire','already retired','what stage','where i am in life'],
    answer: "It helps to think of annuities along a life-stage continuum. <em>Years from retirement</em> — a deferred annuity can grow savings tax-deferred, with no IRS contribution limit, even after you've maxed your 401(k) or IRA. <em>About 5-10 years out</em> — you might want growth with some protection, or start lining up future income. <em>In or entering retirement</em> — an immediate or income annuity can turn savings into a pension-like paycheck for life. Where are you on that path? I'll show products that fit that stage."
  },
  {
    id: 'best_interest_law', tier: 'advanced',
    keywords: ['best interest','best interest law','suitability','is the agent required','consumer protection rules','obligation to me'],
    answer: "Many states now have a <em>best interest</em> standard for annuity sales. It requires the insurer and agent to gather relevant information about your finances, tax situation, and objectives, and to have a reasonable basis that an annuity is in your best interest before recommending it — with disclosure of things like surrender periods, charges, and any conflicts of interest. It's a consumer-protection layer around the recommendation itself. The licensed specialists you'd work with operate under these rules. Want me to connect you with one?"
  },

  /* =====================================================================
     FROM WIKIPEDIA: ANNUITY — NET-NEW CONCEPTS
     ===================================================================== */
  {
    id: 'surrender_charges', tier: 'beginner',
    keywords: ['surrender charge','surrender charges','surrender period','surrender schedule','surrender fee','early withdrawal penalty','what is a surrender charge','how much is a surrender charge','surrender'],
    answer: "A surrender charge is a fee the insurance company collects if you withdraw more than the allowed amount during the early years of an annuity contract — typically the first five to ten years. The charge usually starts higher in year one (often 7–10%) and decreases by about one percentage point each year until it reaches zero. Most contracts also give you a <em>free withdrawal allowance</em> — commonly 10% of your account value per year — that you can take without triggering the charge. After the surrender period ends, you have full access to your money without any company penalty, though ordinary income tax still applies. Want me to filter for products with shorter surrender schedules?"
  },
  {
    id: 'payment_timing', tier: 'intermediate',
    keywords: ['when are payments made','beginning or end of period','annuity immediate','annuity due','payment timing','end of period','start of period','in advance','in arrears'],
    answer: "There are two conventions for when annuity payments are made. An <em>annuity-immediate</em> pays at the <em>end</em> of each period — so interest accrues during the period before each payment arrives. Mortgages work this way. An <em>annuity-due</em> pays at the <em>beginning</em> of each period, meaning each payment is made in advance. Rent and insurance premiums are common examples. For most retirement income annuities, you can choose whether payments arrive at the start or end of the month. Want me to show income products and how their payment timing is structured?"
  },
  {
    id: 'annuity_certain', tier: 'intermediate',
    keywords: ['annuity certain','fixed period annuity','period certain only','payments for set period','guaranteed number of payments','no survival condition','term certain','fixed term payout'],
    answer: "An <em>annuity certain</em> — also called a <em>fixed-period annuity</em> or <em>term certain</em> — makes payments for a set number of years regardless of whether the annuitant is alive. Unlike a life annuity, there's no survival condition: payments are contractually guaranteed for the full term. This makes it predictable but means it doesn't protect against outliving your money the way a lifetime annuity does. People sometimes use a fixed-period annuity to bridge a specific income gap — say, filling the years between retirement and Social Security. Want me to show products with fixed-period or period-certain options?"
  },
  {
    id: 'life_annuity_concept', tier: 'beginner',
    keywords: ['what is a life annuity','how does a life annuity work','payments while i live','income while alive','survival annuity','lifetime payout','pay me as long as i live'],
    answer: "A <em>life annuity</em> makes payments for as long as the annuitant — the person the contract is based on — is alive. Because payments are tied to survival, the total number of payments isn't known in advance; it depends on how long you live. That's actually the key benefit: you can never outlive the income. Insurance companies can offer this guarantee because they pool many annuitants together — those who live shorter lives help fund those who live longer ones. Want me to show lifetime income products and what they'd pay at your age?"
  },
  {
    id: 'perpetuity', tier: 'advanced',
    keywords: ['perpetuity','what is a perpetuity','payments forever','infinite payments','never ending payments','endowment payout','payments that go on forever'],
    answer: "A <em>perpetuity</em> is a special type of annuity where payments continue indefinitely — there's no end date. The present value of a perpetuity is simply the payment amount divided by the interest rate. Perpetuities are more common in finance and endowments than in personal retirement planning, since most people want income for a set period or for life rather than forever. Some pension structures behave like perpetuities when they pass to successive beneficiaries. In practice, a <em>joint-and-survivor</em> or <em>multigenerational</em> annuity is the closest consumer equivalent. Want me to explain how joint-and-survivor income options work?"
  },
  {
    id: 'present_value_annuity', tier: 'advanced',
    keywords: ['present value of an annuity','pv of annuity','how is an annuity valued','how is the value calculated','discounted value','time value annuity','what is my annuity worth today'],
    answer: "The <em>present value</em> of an annuity is what a stream of future payments is worth in today's dollars, accounting for the fact that money available now is worth more than money received later. The higher the interest (discount) rate, the lower the present value — future dollars are discounted more steeply. Insurers use present-value math to price annuities: they calculate what your future income stream is worth today, and that drives how much premium is required. From a buyer's perspective, a higher prevailing interest rate environment generally means you can get more income for the same premium. Want me to show you current income quotes so you can see the math in action?"
  },
  {
    id: 'amortization_annuity', tier: 'advanced',
    keywords: ['amortization','how does amortization work','loan repayment annuity','mortgage annuity','annuity and mortgage','paying off a loan','outstanding balance','retrospective prospective'],
    answer: "Annuity math is the same math that drives loan amortization. When you take a mortgage, the lender calculates a level payment — using the annuity-immediate present-value formula — that repays principal and interest over the loan's term. Each payment is partly interest on the outstanding balance and partly principal reduction. Two methods track what you still owe: the <em>prospective method</em> (the present value of remaining payments) and the <em>retrospective method</em> (original loan plus accrued interest, minus accumulated payments). They always produce the same answer. It's a neat illustration of how annuity principles show up in everyday finance. Want me to keep explaining how income annuities work?"
  },
  {
    id: 'equity_indexed_wikipedia', tier: 'intermediate',
    keywords: ['equity indexed','equity-indexed annuity','how is interest credited on equity indexed','index participation limit','index floor','participation rate cap','minimum guarantee indexed'],
    answer: "An <em>equity-indexed annuity</em> — commonly called a fixed-index annuity — credits interest based partly on the performance of a market index like the S&P 500, while providing a guaranteed minimum return so your principal is protected from market losses. Two key limits shape how much index growth you actually receive: the <em>participation rate</em> (the percentage of the index gain that counts toward your account — for example, 80% of a 10% gain equals 8% credited) and the <em>cap rate</em> (the maximum interest that can be credited in a period, regardless of how high the index climbs). These limits allow the insurer to offer the downside guarantee while still giving you upside potential. Want me to pull up current fixed-index products and show their participation rates and caps?"
  },
  {
    id: 'certain_and_life', tier: 'intermediate',
    keywords: ['certain and life','certain-and-life','life with certain','guaranteed period and lifetime','minimum guarantee lifetime','what if i die early','death before end of term','period plus lifetime','hybrid income option'],
    answer: "A <em>certain-and-life annuity</em> combines two guarantees in one: it pays for a minimum number of years no matter what, and then continues for the rest of your life if you're still living. For example, a \"life with 10-year certain\" contract pays for at least 10 years — so if you pass away in year three, your beneficiary receives payments for the remaining seven years. After that guaranteed window, income continues for as long as you live. It's a way to protect against dying early <em>and</em> outliving your money at the same time, though the payment is slightly lower than a life-only option to cover that extra guarantee. Want me to show products with certain-and-life options?"
  },
  {
    id: 'nominal_vs_effective_rate', tier: 'intermediate',
    keywords: ['nominal rate','effective rate','nominal vs effective','stated rate','annual percentage rate','apr annuity','compounding rate','what rate is quoted','how is the rate stated','quoted interest rate'],
    answer: "When annuities quote an interest rate, it's usually a <em>nominal</em> rate — the stated annual rate before compounding is applied. The <em>effective</em> rate is what you actually earn after compounding happens over the payment frequency (monthly, quarterly, etc.). For example, a 6% nominal rate compounded monthly produces an effective annual rate of about 6.17%, because each month's interest earns a little more interest as the year goes on. The difference matters most when comparing products that compound at different frequencies. I always try to present rates in a consistent way — if you want to compare two products side by side, share the details and I'll help you line them up."
  },
  {
    id: 'how_payment_calculated', tier: 'intermediate',
    keywords: ['how is my payment calculated','how much will i get per month','calculate my monthly payment','annuity payment formula','how do they figure out my payment','how is income amount determined','payment amount formula','how much income will i receive'],
    answer: "Your monthly income from an annuity is calculated by dividing your premium (the lump sum you put in) by the present value factor for your specific contract — which depends on the interest rate, the payout option you choose, and your age. A higher interest rate, a shorter guarantee period, or older age all increase the payment. For example, a $100,000 premium at a 5% rate in a lifetime payout for a 70-year-old will produce a higher monthly check than the same amount for a 60-year-old, because the expected payment period is shorter. Rather than work through the formula by hand, I can pull up real products and show you exactly what each one would pay based on your situation. Want to do that?"
  },
  {
    id: 'variable_subaccounts', tier: 'intermediate',
    keywords: ['sub-accounts','subaccounts','what are sub accounts','variable annuity investments','what does the money invest in','underlying funds','portfolio options variable','variable annuity portfolio'],
    answer: "In a variable annuity, your premium is allocated among <em>sub-accounts</em> — investment options that work similarly to mutual funds, covering asset classes like U.S. stocks, international stocks, bonds, and money market funds. Your account value rises and falls with the performance of the sub-accounts you choose. Because the value fluctuates with the market, variable annuities carry real investment risk — you can lose principal, unlike fixed or fixed-index annuities. They also tend to have higher ongoing costs, including insurance charges and sub-account management fees that can stack to 2–3% annually. Variable annuities are sold by prospectus and require a securities license. Want me to compare fixed and fixed-index options where your principal stays protected?"
  },
  {
    id: 'compounding_frequency', tier: 'advanced',
    keywords: ['compounding','how often does it compound','monthly compounding','quarterly compounding','annual compounding','compounding period','how frequently is interest credited','interest compounding annuity'],
    answer: "Compounding frequency refers to how often earned interest is added to your balance and begins earning interest of its own. More frequent compounding — monthly rather than annually, for example — means your money grows slightly faster for the same stated rate. In a fixed annuity, the insurer specifies the compounding schedule in the contract. For fixed-index annuities, interest is typically credited annually at the end of each index term, then locked in — so it compounds on a one-year cycle by design. The difference between monthly and annual compounding on a $100,000 annuity at 5% is modest (about $170 in year one), but it compounds meaningfully over a decade. When comparing products, always check whether rates are nominal or effective, and how frequently interest is credited. Want me to pull up products and their crediting details?"
  },
  {
    id: 'level_payments', tier: 'beginner',
    keywords: ['level payments','same payment every month','equal payments','consistent income','fixed payment amount','same amount every period','will my payments change','do payments stay the same'],
    answer: "A <em>level payment</em> annuity pays the same fixed amount every period — month after month, year after year — for the entire payout term. This predictability is one of annuities' core appeals: you know exactly what's coming in, which makes budgeting straightforward. The tradeoff is that a fixed dollar amount buys less over time as prices rise, so some people add a cost-of-living adjustment rider to protect against inflation. Variable annuities can have payments that fluctuate with the market, but most traditional fixed and income annuities use level payments unless you specifically choose a rising-payment option. Want me to show products with level income and compare them to ones with built-in COLA increases?"
  },
  {
    id: 'actuarial_life_table', tier: 'advanced',
    keywords: ['life table','mortality table','actuarial table','how does the insurance company calculate','survival probability','life expectancy annuity','how does insurer know how long i will live','longevity risk insurer'],
    answer: "Insurance companies use <em>life tables</em> — also called mortality tables — to estimate how long groups of people are expected to live based on age, gender, and sometimes health status. These tables, built from large population datasets, give the probability of surviving to any given age. When an insurer prices a life annuity, it doesn't know how long <em>you specifically</em> will live, but it can calculate the mathematically expected value of your lifetime income stream across a large pool of people. By pooling thousands of annuitants, the insurer can offer guaranteed lifetime income — the statistical certainty of the pool replaces the uncertainty of any individual life. That pooling mechanism, called mortality credits, is what makes lifetime income annuities uniquely powerful compared to simply drawing down savings on your own."
  },
  {
    id: 'time_value_of_money', tier: 'intermediate',
    keywords: ['time value of money','why is money worth more now','why money today is worth more','discount rate','future dollars worth less','value of money over time'],
    answer: "The <em>time value of money</em> is the principle that a dollar today is worth more than a dollar in the future — because the dollar you have now can be invested and earn interest in the meantime. This concept is the foundation of all annuity pricing. When an insurer quotes you a monthly income for a given lump sum, they are calculating the present value of all those future payments and confirming it equals your premium. As interest rates rise, future dollars are discounted more heavily, so the insurer can pay you more income for the same premium — which is why annuity income rates tend to be higher in higher interest-rate environments. It's also why starting income earlier produces a lower monthly payment than waiting: fewer remaining dollars need to cover more years."
  },
  {
    id: 'intro', tier: 'meta', keywords: [],
    answer: "Hi, I'm Grace. I can help you explore annuities, rates, income options, bonuses, and current market information using real industry data from over 80 different annuity companies. Most visitors start with one question. What's yours? Click the microphone below to talk with me, or type in your question."
  },
  {
    id: 'mic_prompt', tier: 'meta', keywords: [],
    answer: "What would you like to learn about?"
  },
  {
    id: 'products_opening', tier: 'meta', keywords: [],
    answer: "Absolutely — let me pull up the products that match what you've told me. Remember, I can't recommend one over another; I'm just showing you what fits your filters."
  },
  {
    id: 'products_clarify', tier: 'meta', keywords: [],
    answer: "Happy to pull up products. To narrow it to ones that actually fit, can you tell me what you're after first — steady income, growth, safety, or RMD help?"
  },
  {
    id: 'handoff_main', tier: 'meta', keywords: [],
    answer: "That's a great question — and an important one to get exactly right. Rather than give you a quick answer, I'd like to connect you with a licensed specialist who can go deep on that for your specific situation. In the meantime, I can also show you products that match what you're looking for. Which would help more?"
  },
  {
    id: 'handoff_limit', tier: 'meta', keywords: [],
    answer: "We've covered a lot! To keep going in depth, the best next step is a quick chat with a licensed specialist. Want me to set that up, or pull up products that match your filters?"
  },
  {
    id: 'handoff_thoughtful', tier: 'meta', keywords: [],
    answer: "That's a thoughtful question. I'd want a licensed specialist to give you a precise answer on that one. In the meantime, I can show you products that match what you're looking for — want me to pull those up?"
  }

];

// Expose for the Grace app (browser global) and Node (module export)
if (typeof window !== 'undefined') { window.GRACE_KNOWLEDGE = KNOWLEDGE; }
if (typeof module !== 'undefined' && module.exports) { module.exports = { KNOWLEDGE }; }
