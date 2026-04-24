'use client';

import { useState } from 'react';

/**
 * TRAVEL ADVISORY BANNER
 *
 * Shows a prominent advisory at the top of Plan Your Visit pages about
 * the ongoing Hwy 140 closure and directs users to check current conditions.
 *
 * Per KSG (April 23, 2026): assume Hwy 140 reopens before July 4, but
 * keep this banner visible because conditions can change and visitors
 * should always check before driving.
 *
 * HOW TO UPDATE:
 * - Once Hwy 140 formally reopens, change `status` to 'open' and the
 *   banner will switch to a lighter "always-check conditions" message
 * - If Hwy 140 is confirmed CLOSED on July 4 (hopefully won't happen),
 *   change status to 'closed-confirmed' and the banner will show alt routes
 */

type AdvisoryStatus = 'currently-closed' | 'open' | 'closed-confirmed';

const ADVISORY_STATUS: AdvisoryStatus = 'currently-closed';

export default function TravelAdvisory() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  const content = getAdvisoryContent(ADVISORY_STATUS);

  return (
    <div
      className={`border-b-2 ${
        content.severity === 'warning'
          ? 'bg-oxblood text-cream border-oxblood'
          : 'bg-gold/20 text-navy border-gold'
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 py-3 flex items-start gap-4">
        <span className="text-xl flex-shrink-0 mt-0.5" aria-hidden>
          {content.severity === 'warning' ? '⚠️' : 'ℹ️'}
        </span>
        <div className="flex-1 text-sm leading-relaxed">
          <strong className="font-semibold">{content.title}:</strong>{' '}
          {content.message}{' '}
          <a
            href={content.linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`underline font-medium ${
              content.severity === 'warning' ? 'text-cream' : 'text-navy'
            }`}
          >
            {content.linkLabel}
          </a>
        </div>
        <button
          onClick={() => setDismissed(true)}
          aria-label="Dismiss advisory"
          className={`flex-shrink-0 opacity-70 hover:opacity-100 text-xl leading-none ${
            content.severity === 'warning' ? 'text-cream' : 'text-navy'
          }`}
        >
          ×
        </button>
      </div>
    </div>
  );
}

function getAdvisoryContent(status: AdvisoryStatus) {
  switch (status) {
    case 'currently-closed':
      return {
        severity: 'warning' as const,
        title: 'Travel Advisory',
        message:
          'Highway 140 is currently closed between Yosemite Bug Mountain Resort and Cedar Lodge (east of Mariposa, toward Yosemite). Mariposa town and the July 4 event are accessible from the west via Highway 140 from Merced. Crews are working toward reopening. Please check conditions before your trip.',
        linkUrl:
          'https://www.yosemite.com/plan-your-trip/travel-responsibly/yosemite-road-conditions/',
        linkLabel: 'Current road conditions →',
      };
    case 'closed-confirmed':
      return {
        severity: 'warning' as const,
        title: 'Important Route Notice',
        message:
          'Highway 140 remains closed for July 4. Alternate routes: Highway 41 via Fish Camp (for Yosemite and south access) or Highway 120 via Buck Meadows (for Yosemite north access). Downtown Mariposa remains accessible from Merced via Highway 140 west.',
        linkUrl:
          'https://www.yosemite.com/plan-your-trip/travel-responsibly/yosemite-road-conditions/',
        linkLabel: 'Alternate route details →',
      };
    case 'open':
    default:
      return {
        severity: 'info' as const,
        title: 'Planning Your Drive',
        message:
          'Mountain road conditions can change with weather and wildfires. Before you drive, please check current Caltrans conditions for your route.',
        linkUrl:
          'https://www.yosemite.com/plan-your-trip/travel-responsibly/yosemite-road-conditions/',
        linkLabel: 'Check conditions →',
      };
  }
}
