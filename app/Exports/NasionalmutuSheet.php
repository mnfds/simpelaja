<?php

namespace App\Exports;

use App\Models\nilai_nasionalmutu;
use App\Models\nasionalmutu;
use Carbon\Carbon;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\RegistersEventListeners;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithColumnWidths;
use Maatwebsite\Excel\Concerns\WithDefaultStyles;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithStyles;
use Maatwebsite\Excel\Concerns\WithTitle;
use Maatwebsite\Excel\Events\AfterSheet;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use PhpOffice\PhpSpreadsheet\Style;
use PhpOffice\PhpSpreadsheet\Style\Style as DefaultStyles;

class NasionalmutuSheet implements WithTitle, WithHeadings, FromQuery, WithMapping, WithColumnWidths, ShouldAutoSize, WithStyles, WithEvents
{
    use RegistersEventListeners;
    public $data;
    public $data_nilai;

    public function __construct($data, $data_nilai)
    {
        $this->data = $data;
        $this->data_nilai = $data_nilai;
    }

    /**
     * @return string
     */
    public function title(): string
    {
        return $this->data->mutu;
    }

    public function headings(): array
    {
        return [
            // 'ID',
            'Indikator',
            'Target',
            'Capaian',
            'Nilai',
        ];
    }

    public function query()
    {
        // return nilai_nasionalmutu::where('id_nasionalmutu', $this->data->id);
        return $this->data;
    }

    public function map($row): array
    {
        // $indikator = $this->data;
        $capaian = $this->data_nilai;
        $capaian = $capaian->where('id_nasionalmutu', $row['id']);

        return [
            $row['mutu'],
            $capaian->value('target'),
            $capaian->value('hasil'),
            $capaian->value('nilai'),
        ];
    }


    public function columnWidths(): array
    {
        return [
            'B' => 25
        ];
    }

    public function styles(Worksheet $sheet)
    {
        // return [
        //     '1' => ['font' => ['bold' => true]],
        // ];
        $sheet->getStyle('1')->getFont()->setBold(true);
        $sheet->getStyle('B1:B' . $sheet->getHighestRow())->getAlignment()->setWrapText(true);
    }

    /**
     * @return array|void
     */
    public function defaultStyles(DefaultStyles $defaultStyle)
    {
        return [
            'font' => [
                'name' => 'Calibri',
                'size' => 12
            ],
            'alignment' => [
                'horizontal' => Style\Alignment::HORIZONTAL_CENTER,
                'vertical' => Style\Alignment::VERTICAL_CENTER,
            ],
        ];
    }

    // public static function afterSheet(AfterSheet $event)
    // {
    //     return $event->sheet->getDelegate()->setRightToLeft(true);
    // }
}
