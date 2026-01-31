import { useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Lightbulb,
  AlertCircle,
  CheckCircle2,
  Code2,
  Zap,
  Brain,
  Target,
  Sparkles
} from 'lucide-react';

interface RichMarkdownProps {
  content: string;
  className?: string;
  showReadingProgress?: boolean;
}

interface ParsedBlock {
  type: 'paragraph' | 'header' | 'code' | 'list' | 'quote' | 'callout' | 'keypoint' | 'divider' | 'table';
  content: string;
  level?: number; // for headers
  calloutType?: 'tip' | 'warning' | 'info' | 'success' | 'brain' | 'action';
  listItems?: string[];
  language?: string;
  tableHeaders?: string[];
  tableRows?: string[][];
}

const calloutConfig = {
  tip: {
    icon: Lightbulb,
    bg: 'bg-golden/10',
    border: 'border-golden/30',
    text: 'text-golden',
    label: 'Pro Tip'
  },
  warning: {
    icon: AlertCircle,
    bg: 'bg-coral/10',
    border: 'border-coral/30',
    text: 'text-coral',
    label: 'Important'
  },
  info: {
    icon: Sparkles,
    bg: 'bg-sky/10',
    border: 'border-sky/30',
    text: 'text-sky',
    label: 'Did You Know?'
  },
  success: {
    icon: CheckCircle2,
    bg: 'bg-sage/10',
    border: 'border-sage/30',
    text: 'text-sage',
    label: 'Key Insight'
  },
  brain: {
    icon: Brain,
    bg: 'bg-lavender/10',
    border: 'border-lavender/30',
    text: 'text-lavender',
    label: 'Think About It'
  },
  action: {
    icon: Target,
    bg: 'bg-sunrise/10',
    border: 'border-sunrise/30',
    text: 'text-sunrise',
    label: 'Try This'
  },
};

// Parse inline markdown (bold, italic, code, links)
function parseInline(text: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  let remaining = text;
  let keyIndex = 0;

  while (remaining.length > 0) {
    // Bold: **text**
    const boldMatch = remaining.match(/^\*\*(.+?)\*\*/);
    if (boldMatch) {
      nodes.push(
        <strong key={keyIndex++} className="text-text-primary font-semibold">
          {boldMatch[1]}
        </strong>
      );
      remaining = remaining.slice(boldMatch[0].length);
      continue;
    }

    // Italic: *text* or _text_
    const italicMatch = remaining.match(/^[*_]([^*_]+)[*_]/);
    if (italicMatch) {
      nodes.push(<em key={keyIndex++} className="italic text-text-secondary">{italicMatch[1]}</em>);
      remaining = remaining.slice(italicMatch[0].length);
      continue;
    }

    // Inline code: `code`
    const codeMatch = remaining.match(/^`([^`]+)`/);
    if (codeMatch) {
      nodes.push(
        <code key={keyIndex++} className="px-1.5 py-0.5 rounded bg-surface/80 text-sunrise font-mono text-sm">
          {codeMatch[1]}
        </code>
      );
      remaining = remaining.slice(codeMatch[0].length);
      continue;
    }

    // Highlighted text: ==text==
    const highlightMatch = remaining.match(/^==(.+?)==/);
    if (highlightMatch) {
      nodes.push(
        <mark key={keyIndex++} className="bg-golden/20 text-golden px-1 rounded">
          {highlightMatch[1]}
        </mark>
      );
      remaining = remaining.slice(highlightMatch[0].length);
      continue;
    }

    // Regular text until next special character
    const nextSpecial = remaining.search(/[*_`=\[]/);
    if (nextSpecial === -1) {
      nodes.push(remaining);
      break;
    } else if (nextSpecial === 0) {
      // Special char but didn't match pattern, treat as regular
      nodes.push(remaining[0]);
      remaining = remaining.slice(1);
    } else {
      nodes.push(remaining.slice(0, nextSpecial));
      remaining = remaining.slice(nextSpecial);
    }
  }

  return nodes;
}

// Parse full content into blocks
function parseContent(content: string): ParsedBlock[] {
  const blocks: ParsedBlock[] = [];
  const lines = content.split('\n');
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    // Empty line - skip
    if (!trimmed) {
      i++;
      continue;
    }

    // Horizontal rule: --- or ***
    if (/^[-*]{3,}$/.test(trimmed)) {
      blocks.push({ type: 'divider', content: '' });
      i++;
      continue;
    }

    // Headers: # ## ### or **Header**
    const headerMatch = trimmed.match(/^(#{1,4})\s+(.+)$/);
    if (headerMatch) {
      blocks.push({
        type: 'header',
        content: headerMatch[2],
        level: headerMatch[1].length
      });
      i++;
      continue;
    }

    // Bold-only line as header (existing pattern)
    if (trimmed.startsWith('**') && trimmed.endsWith('**') && !trimmed.slice(2, -2).includes('**')) {
      blocks.push({
        type: 'header',
        content: trimmed.slice(2, -2),
        level: 3
      });
      i++;
      continue;
    }

    // Code block: ```
    if (trimmed.startsWith('```')) {
      const language = trimmed.slice(3).trim() || 'text';
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      blocks.push({
        type: 'code',
        content: codeLines.join('\n'),
        language
      });
      i++; // skip closing ```
      continue;
    }

    // Callout: > [!tip] or > **Tip:** or variations
    if (trimmed.startsWith('>')) {
      const calloutContent: string[] = [];
      let calloutType: ParsedBlock['calloutType'] = 'info';

      // Check for callout type markers
      const typeMatch = trimmed.match(/^>\s*\[!(tip|warning|info|success|brain|action)\]/i);
      if (typeMatch) {
        calloutType = typeMatch[1].toLowerCase() as ParsedBlock['calloutType'];
        calloutContent.push(trimmed.replace(/^>\s*\[!\w+\]\s*/, ''));
      } else if (trimmed.match(/^>\s*\*\*(tip|pro tip|hint):/i)) {
        calloutType = 'tip';
        calloutContent.push(trimmed.replace(/^>\s*\*\*(tip|pro tip|hint):\*\*\s*/i, ''));
      } else if (trimmed.match(/^>\s*\*\*(warning|caution|important):/i)) {
        calloutType = 'warning';
        calloutContent.push(trimmed.replace(/^>\s*\*\*(warning|caution|important):\*\*\s*/i, ''));
      } else if (trimmed.match(/^>\s*\*\*(note|info|did you know):/i)) {
        calloutType = 'info';
        calloutContent.push(trimmed.replace(/^>\s*\*\*(note|info|did you know):\*\*\s*/i, ''));
      } else if (trimmed.match(/^>\s*\*\*(key|insight|success):/i)) {
        calloutType = 'success';
        calloutContent.push(trimmed.replace(/^>\s*\*\*(key|insight|success):\*\*\s*/i, ''));
      } else if (trimmed.match(/^>\s*\*\*(think|brain|reflect):/i)) {
        calloutType = 'brain';
        calloutContent.push(trimmed.replace(/^>\s*\*\*(think|brain|reflect):\*\*\s*/i, ''));
      } else if (trimmed.match(/^>\s*\*\*(action|try|do):/i)) {
        calloutType = 'action';
        calloutContent.push(trimmed.replace(/^>\s*\*\*(action|try|do):\*\*\s*/i, ''));
      } else {
        calloutContent.push(trimmed.slice(1).trim());
      }

      i++;
      // Continue collecting quote lines
      while (i < lines.length && lines[i].trim().startsWith('>')) {
        calloutContent.push(lines[i].trim().slice(1).trim());
        i++;
      }

      blocks.push({
        type: 'callout',
        content: calloutContent.join('\n'),
        calloutType
      });
      continue;
    }

    // Unordered list: - or *
    if (/^[-*]\s+/.test(trimmed)) {
      const listItems: string[] = [];
      while (i < lines.length && /^[-*]\s+/.test(lines[i].trim())) {
        listItems.push(lines[i].trim().replace(/^[-*]\s+/, ''));
        i++;
      }
      blocks.push({ type: 'list', content: '', listItems });
      continue;
    }

    // Numbered list: 1. 2. etc
    if (/^\d+\.\s+/.test(trimmed)) {
      const listItems: string[] = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) {
        listItems.push(lines[i].trim().replace(/^\d+\.\s+/, ''));
        i++;
      }
      blocks.push({ type: 'list', content: '', listItems });
      continue;
    }

    // Table: | col1 | col2 | col3 |
    if (/^\|.+\|$/.test(trimmed)) {
      const tableLines: string[] = [];
      while (i < lines.length && /^\|.+\|$/.test(lines[i].trim())) {
        tableLines.push(lines[i].trim());
        i++;
      }

      if (tableLines.length >= 2) {
        // Parse header row
        const headerLine = tableLines[0];
        const headers = headerLine
          .split('|')
          .slice(1, -1) // Remove empty strings from start/end
          .map(cell => cell.trim());

        // Skip separator row (|---|---|---|)
        const dataStartIndex = tableLines[1].includes('-') ? 2 : 1;

        // Parse data rows
        const rows: string[][] = [];
        for (let j = dataStartIndex; j < tableLines.length; j++) {
          const row = tableLines[j]
            .split('|')
            .slice(1, -1)
            .map(cell => cell.trim());
          rows.push(row);
        }

        blocks.push({
          type: 'table',
          content: '',
          tableHeaders: headers,
          tableRows: rows
        });
      }
      continue;
    }

    // Key point marker: 🔑 or ⭐ at start
    if (/^[🔑⭐💡✨🎯]\s*/.test(trimmed)) {
      blocks.push({
        type: 'keypoint',
        content: trimmed.replace(/^[🔑⭐💡✨🎯]\s*/, '')
      });
      i++;
      continue;
    }

    // Regular paragraph - collect until empty line or special
    const paragraphLines: string[] = [trimmed];
    i++;
    while (i < lines.length) {
      const nextLine = lines[i].trim();
      if (!nextLine ||
          nextLine.startsWith('#') ||
          nextLine.startsWith('```') ||
          nextLine.startsWith('>') ||
          nextLine.startsWith('-') ||
          nextLine.startsWith('*') ||
          /^\d+\.\s+/.test(nextLine) ||
          /^[-*]{3,}$/.test(nextLine) ||
          (nextLine.startsWith('**') && nextLine.endsWith('**'))) {
        break;
      }
      paragraphLines.push(nextLine);
      i++;
    }

    blocks.push({ type: 'paragraph', content: paragraphLines.join(' ') });
  }

  return blocks;
}

export function RichMarkdown({ content, className = '' }: RichMarkdownProps) {
  const blocks = useMemo(() => parseContent(content), [content]);

  const renderHeader = (content: React.ReactNode, level: number, className: string) => {
    switch (level) {
      case 1: return <h1 className={className}>{content}</h1>;
      case 2: return <h2 className={className}>{content}</h2>;
      case 3: return <h3 className={className}>{content}</h3>;
      case 4: return <h4 className={className}>{content}</h4>;
      case 5: return <h5 className={className}>{content}</h5>;
      default: return <h6 className={className}>{content}</h6>;
    }
  };

  const renderBlock = (block: ParsedBlock, index: number) => {
    switch (block.type) {
      case 'header':
        const headerClasses = {
          1: 'text-2xl md:text-3xl font-display font-bold text-text-primary mt-8 mb-4',
          2: 'text-xl md:text-2xl font-display font-bold text-text-primary mt-6 mb-3',
          3: 'text-lg md:text-xl font-display font-semibold text-text-primary mt-5 mb-2',
          4: 'text-base md:text-lg font-display font-semibold text-text-primary mt-4 mb-2',
        };
        const level = Math.min(block.level || 3, 6);
        const headerClass = headerClasses[level as keyof typeof headerClasses] || headerClasses[3];
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.02 }}
          >
            {renderHeader(parseInline(block.content), level, headerClass)}
          </motion.div>
        );

      case 'paragraph':
        return (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.02 }}
            className="text-text-secondary leading-relaxed md:leading-loose mb-4"
          >
            {parseInline(block.content)}
          </motion.p>
        );

      case 'code':
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.02 }}
            className="my-4 rounded-xl overflow-hidden border border-white/10"
          >
            <div className="flex items-center justify-between px-4 py-2 bg-surface/50 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-text-muted" />
                <span className="text-xs text-text-muted font-mono uppercase">{block.language}</span>
              </div>
            </div>
            <pre className="p-4 bg-base/50 overflow-x-auto">
              <code className="text-sm font-mono text-text-primary leading-relaxed">
                {block.content}
              </code>
            </pre>
          </motion.div>
        );

      case 'list':
        const isOrdered = block.content === 'ordered';
        return (
          <motion.ul
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.02 }}
            className={`my-4 space-y-2 ${isOrdered ? 'list-decimal' : ''} pl-0`}
          >
            {block.listItems?.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-text-secondary">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                <span className="leading-relaxed">{parseInline(item)}</span>
              </li>
            ))}
          </motion.ul>
        );

      case 'callout':
        const config = calloutConfig[block.calloutType || 'info'];
        const Icon = config.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.02 }}
            className={`my-5 p-4 rounded-xl ${config.bg} border ${config.border}`}
          >
            <div className="flex items-start gap-3">
              <div className={`w-8 h-8 rounded-lg ${config.bg} flex items-center justify-center shrink-0`}>
                <Icon className={`w-4 h-4 ${config.text}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-semibold ${config.text} mb-1`}>{config.label}</p>
                <div className="text-text-secondary text-sm leading-relaxed">
                  {block.content.split('\n').map((line, i) => (
                    <p key={i} className={i > 0 ? 'mt-2' : ''}>
                      {parseInline(line)}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 'keypoint':
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.02 }}
            className="my-4 p-4 rounded-xl bg-gradient-to-r from-golden/10 via-sunrise/5 to-transparent border-l-4 border-golden"
          >
            <div className="flex items-center gap-3">
              <Zap className="w-5 h-5 text-golden shrink-0" />
              <p className="text-text-primary font-medium">{parseInline(block.content)}</p>
            </div>
          </motion.div>
        );

      case 'divider':
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            className="my-8 flex items-center gap-4"
          >
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <Sparkles className="w-4 h-4 text-golden/50" />
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </motion.div>
        );

      case 'table':
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.02 }}
            className="my-5 overflow-x-auto rounded-xl border border-white/10"
          >
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface/50 border-b border-white/10">
                  {block.tableHeaders?.map((header, idx) => (
                    <th
                      key={idx}
                      className="px-4 py-3 text-left font-semibold text-text-primary"
                    >
                      {parseInline(header)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.tableRows?.map((row, rowIdx) => (
                  <tr
                    key={rowIdx}
                    className={`border-b border-white/5 ${
                      rowIdx % 2 === 0 ? 'bg-base/30' : 'bg-surface/20'
                    }`}
                  >
                    {row.map((cell, cellIdx) => (
                      <td
                        key={cellIdx}
                        className="px-4 py-3 text-text-secondary"
                      >
                        {parseInline(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`rich-markdown ${className}`}>
      {blocks.map((block, index) => renderBlock(block, index))}
    </div>
  );
}

export default RichMarkdown;
