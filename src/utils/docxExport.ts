import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Table,
  TableRow,
  TableCell,
  BorderStyle,
  AlignmentType,
  WidthType,
  UnderlineType,
} from 'docx';
import { DictionaryExercise } from '../data/globalSuccessCurriculum';

export async function exportExerciseToDocx(
  exercise: DictionaryExercise,
  grade: number,
  unit: number,
  unitTitle: string,
  schoolName: string = 'TRƯỜNG THCS ........................................'
): Promise<void> {
  const doc = new Document({
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: 1134, // ~2cm
              bottom: 1134,
              left: 1417, // ~2.5cm
              right: 1134,
            },
          },
        },
        children: [
          // Header Table (2 columns: School & Exam info)
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            borders: {
              top: { style: BorderStyle.NONE },
              bottom: { style: BorderStyle.NONE },
              left: { style: BorderStyle.NONE },
              right: { style: BorderStyle.NONE },
              insideHorizontal: { style: BorderStyle.NONE },
              insideVertical: { style: BorderStyle.NONE },
            },
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    width: { size: 50, type: WidthType.PERCENTAGE },
                    children: [
                      new Paragraph({
                        alignment: AlignmentType.CENTER,
                        children: [
                          new TextRun({ text: 'PHÒNG GD&ĐT QUẬN / HUYỆN .........', bold: true, size: 20 }),
                        ],
                      }),
                      new Paragraph({
                        alignment: AlignmentType.CENTER,
                        children: [
                          new TextRun({ text: schoolName, bold: true, size: 20 }),
                        ],
                      }),
                      new Paragraph({
                        alignment: AlignmentType.CENTER,
                        children: [
                          new TextRun({ text: '-----------------------', size: 18 }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: { size: 50, type: WidthType.PERCENTAGE },
                    children: [
                      new Paragraph({
                        alignment: AlignmentType.CENTER,
                        children: [
                          new TextRun({ text: `ĐỀ KIỂM TRA ĐỊNH KỲ - TIẾNG ANH ${grade}`, bold: true, size: 20 }),
                        ],
                      }),
                      new Paragraph({
                        alignment: AlignmentType.CENTER,
                        children: [
                          new TextRun({ text: `CHƯƠNG TRÌNH GLOBAL SUCCESS - UNIT ${unit}: ${unitTitle.toUpperCase()}`, size: 18, italics: true }),
                        ],
                      }),
                      new Paragraph({
                        alignment: AlignmentType.CENTER,
                        children: [
                          new TextRun({ text: 'Thời gian làm bài: 45 phút', size: 18, italics: true }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),

          // Student Info line
          new Paragraph({
            spacing: { before: 240, after: 240 },
            children: [
              new TextRun({ text: 'Họ và tên thí sinh: ............................................................................   Lớp: .................  SBD: .................', size: 20 }),
            ],
          }),

          // Section Title
          new Paragraph({
            spacing: { before: 180, after: 120 },
            children: [
              new TextRun({
                text: `VI. ${exercise.instructionEn} ${exercise.pointsTotal} `,
                bold: true,
                size: 22,
                underline: { type: UnderlineType.SINGLE },
              }),
              new TextRun({
                text: `${exercise.instructionVi}`,
                bold: true,
                size: 20,
              }),
            ],
          }),

          // Dictionary Entry Box (Bordered Table with padding)
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            borders: {
              top: { style: BorderStyle.SINGLE, size: 8, color: '222222' },
              bottom: { style: BorderStyle.SINGLE, size: 8, color: '222222' },
              left: { style: BorderStyle.SINGLE, size: 8, color: '222222' },
              right: { style: BorderStyle.SINGLE, size: 8, color: '222222' },
            },
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    margins: {
                      top: 140,
                      bottom: 140,
                      left: 180,
                      right: 180,
                    },
                    children: [
                      // Word and IPA
                      new Paragraph({
                        spacing: { after: 60 },
                        children: [
                          new TextRun({
                            text: exercise.keyword,
                            bold: true,
                            size: 26,
                            color: '1E3A8A', // Deep navy
                          }),
                          new TextRun({
                            text: `  ${exercise.ipa}`,
                            size: 22,
                            color: '475569',
                          }),
                        ],
                      }),
                      // Part of speech
                      new Paragraph({
                        spacing: { after: 100 },
                        indent: { left: 240 },
                        children: [
                          new TextRun({
                            text: exercise.partOfSpeech,
                            italics: true,
                            size: 20,
                            color: '334155',
                          }),
                        ],
                      }),
                      // Definition
                      new Paragraph({
                        spacing: { after: 100 },
                        children: [
                          new TextRun({
                            text: `${exercise.definitionNumber || '1.'} `,
                            size: 21,
                            bold: true,
                          }),
                          new TextRun({
                            text: exercise.grammarTag ? `${exercise.grammarTag} ` : '',
                            size: 20,
                            italics: true,
                          }),
                          new TextRun({
                            text: exercise.definitionText,
                            size: 21,
                          }),
                        ],
                      }),
                      // Examples with bullets
                      ...exercise.examples.map((ex) => {
                        // Highlight boldPhrase in example
                        const sentence = ex.fullSentence;
                        const boldTarget = ex.boldPhrase;
                        const parts = sentence.split(boldTarget);

                        if (parts.length > 1 && boldTarget) {
                          return new Paragraph({
                            indent: { left: 360 },
                            spacing: { after: 60 },
                            children: [
                              new TextRun({ text: 'o  ', size: 18, color: '64748B' }),
                              new TextRun({ text: parts[0], italics: true, size: 20 }),
                              new TextRun({ text: boldTarget, bold: true, italics: true, size: 20 }),
                              new TextRun({ text: parts.slice(1).join(boldTarget), italics: true, size: 20 }),
                            ],
                          });
                        }

                        return new Paragraph({
                          indent: { left: 360 },
                          spacing: { after: 60 },
                          children: [
                            new TextRun({ text: 'o  ', size: 18, color: '64748B' }),
                            new TextRun({ text: sentence, italics: true, size: 20 }),
                          ],
                        });
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),

          // Answers box header
          new Paragraph({
            spacing: { before: 200, after: 120 },
            children: [
              new TextRun({
                text: 'ANSWERS',
                bold: true,
                size: 20,
              }),
            ],
          }),

          // Questions with blank lines
          ...exercise.questions.map((q) => {
            return new Paragraph({
              spacing: { after: 120 },
              children: [
                new TextRun({
                  text: `${q.questionNumber}. `,
                  bold: true,
                  size: 21,
                }),
                new TextRun({
                  text: q.sentenceBefore,
                  size: 21,
                }),
                new TextRun({
                  text: '____________________________________',
                  bold: true,
                  size: 21,
                }),
                new TextRun({
                  text: q.sentenceAfter,
                  size: 21,
                }),
              ],
            });
          }),

          // Teacher Answer Key Section
          new Paragraph({
            spacing: { before: 400, after: 140 },
            children: [
              new TextRun({
                text: '---------------------------------------------------------------------------------------------------------------------',
                color: '94A3B8',
                size: 16,
              }),
            ],
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 200 },
            children: [
              new TextRun({
                text: 'HƯỚNG DẪN CHẤM & ĐÁP ÁN CHI TIẾT (TEACHER KEY)',
                bold: true,
                size: 22,
                color: '0F172A',
              }),
            ],
          }),

          ...exercise.questions.flatMap((q) => [
            new Paragraph({
              spacing: { before: 120, after: 60 },
              children: [
                new TextRun({ text: `Câu ${q.questionNumber}: `, bold: true, size: 21 }),
                new TextRun({ text: q.answer, bold: true, color: '15803D', size: 21 }),
              ],
            }),
            new Paragraph({
              indent: { left: 240 },
              spacing: { after: 40 },
              children: [
                new TextRun({ text: '• Câu hoàn chỉnh: ', italics: true, size: 20 }),
                new TextRun({ text: `${q.sentenceBefore}${q.answer}${q.sentenceAfter}`, size: 20 }),
              ],
            }),
            new Paragraph({
              indent: { left: 240 },
              spacing: { after: 40 },
              children: [
                new TextRun({ text: '• Dịch nghĩa: ', italics: true, size: 20 }),
                new TextRun({ text: q.vietnameseMeaning, size: 20 }),
              ],
            }),
            new Paragraph({
              indent: { left: 240 },
              spacing: { after: 120 },
              children: [
                new TextRun({ text: '• Giải thích: ', italics: true, size: 20 }),
                new TextRun({ text: q.explanation, size: 20 }),
              ],
            }),
          ]),
        ],
      },
    ],
  });

  const blob = await Packer.toBlob(doc);
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `GlobalSuccess_Grade${grade}_Unit${unit}_${exercise.keyword}_DictionaryExercise.docx`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
