import React, { useEffect, useState } from "react";
import { Grid, Card, Paper, Stack, Tooltip, ClickAwayListener } from "@mui/material";



import { Media } from "../atoms/Media";
import Typography from "../atoms/Typography";
import { StaticImage } from "gatsby-plugin-image";
import useMediaQuery from "../../hooks/useMediaQuery";
import { Link, navigate } from "gatsby";


const MajorsBusiness = () => {
    const majorData = [
        {
            img: <StaticImage
                className="Major-Img-Business"
                src='../../images/services/management.png'
                alt='image'
                objectFit='contain'
                placeholder="blurred" />,
            data: "أنظمة الشركات",
            description: 'All consultations related to the worker and the employer and the rights of each of them.'
        },
        {
            img: <StaticImage
                className="Major-Img-Business"
                src='../../images/services/mortgage.png'
                alt='image'
                objectFit='contain'
                placeholder="blurred" />,
            data: "الملكية الفكرية",
            description: 'All consultations that are related to all commercial cases and their branches.'
        },
        {
            img: <StaticImage
                className="Major-Img-Business"
                src='../../images/services/mortgage.png'
                alt='image'
                objectFit='contain'
                placeholder="blurred" />,
            data: "استيفاء الديون",
            description: 'All consultations that are related to all commercial cases and their branches.'
        },
        {
            img: <StaticImage
                className="Major-Img-Business"
                src='../../images/services/mortgage.png'
                alt='image'
                objectFit='contain'
                placeholder="blurred" />,
            data: "قانون الاستثمار الأجنبي",
            description: 'All consultations that are related to cases carried out through electronic devices.'
        },
        {
            img: <StaticImage
                className="Major-Img-Business"
                src='../../images/services/Path 20.png'
                alt='image'
                objectFit='contain'
                placeholder="blurred" />,
            data: "القانون الدولي التجاري",
            description: 'All consultations related to real estate and the rights of the seller and buyer.'
        },
        // -----
        {
            img: <StaticImage
                className="Major-Img-Business"
                src='../../images/services/Loan-Real Estate-Investment-Loan-Financial.png'
                alt='image'
                objectFit='contain'
                placeholder="blurred" />,
            data: "القضايا العقارية",
            description: 'All cases are related to financing companies, banks, financial leasing companies, and other financing agencies.'
        },
        {
            img: <StaticImage
                className="Major-Img-Business"
                src='../../images/services/give.png'
                alt='image'
                objectFit='contain'
                placeholder="blurred" />,
            data: "قضايا الميراث",
            description: 'All consultations related to VAT and the rules and regulations that stipulate how, when, and how much must be paid in taxes in the K.S.A.'
        },
        {
            img: <StaticImage
                className="Major-Img-Business"
                src='../../images/services/give.png'
                alt='image'
                objectFit='contain'
                placeholder="blurred" />,
            data: "الزكاة والضرائب",
            description: 'All lawsuits between insurance companies and the beneficiaries, either individual or companies.'
        },
        {
            img: <StaticImage
                className="Major-Img-Business"
                src='../../images/services/laborers.png'
                alt='image'
                objectFit='contain'
                placeholder="blurred" />,
            data: "القضايا العمالية",
            description: 'Medical errors '
        },
        {
            img: <StaticImage
                className="Major-Img-Business"
                src='../../images/services/Group 962.png'
                alt='image'
                objectFit='contain'
                placeholder="blurred" />,
            data: "الجرائم الإلكترونية",
            description: 'Division of the financial estates '
        },
        // -----
        {
            img: <StaticImage
                className="Major-Img-Business"
                src='../../images/services/budget.png'
                alt='image'
                objectFit='contain'
                placeholder="blurred" />,
            data: "حالات التمويل",
            description: 'All consultations related to criminal offenses and the rights of the accused and the victim.'
        },
        {
            img: <StaticImage
                className="Major-Img-Business"
                src='../../images/services/compliant.png'
                alt='image'
                objectFit='contain'
                placeholder="blurred" />,
            data: "قضايا التأمين",
            description: 'These are the lawsuits filed against the endower or the testator or their heirs regarding (establishing or nullifying the endowment or will), or filed against the principal regarding (establishing entitlement or handing it over - holding the principal accountable or dismissing him).'
        },

        {
            img: <StaticImage
                className="Major-Img-Business"
                src='../../images/services/compliant.png'
                alt='image'
                objectFit='contain'
                placeholder="blurred" />,
            data: "أنظمة هيئة السوق المالي",
            description: 'It is a claim arising from an incident in which one of the parties involved a moving vehicle and resulted in human or material damages unintentionally.'
        },

    ];


    const { isMobile } = useMediaQuery();
    const [open, setOpen] = React.useState(false);

    const [tooltipNumber, setTooltipNumber] = useState(-1);
    const [tooltipTimerId, setTooltipTimerId] = useState<any>(null);

    const tooltipHandler = (i: number) => {

        clearTimeout(tooltipTimerId); // Clear the previous timeout

        setTooltipNumber(i);

        const newTimerId = setTimeout(() => {
            setTooltipNumber(-1);
        }, 2000);

        setTooltipTimerId(newTimerId);
    };




    return (

        <div style={{ background: "radial-gradient(at 70% ,#0F242D1A 0%,#FBFBFB00 80%)" }}>

            <div style={{ width: "95%", margin: '1rem 0' }} className="BF-Card mx-auto">

                <Grid className='mx-auto' container
                    rowSpacing={4}
                    columnSpacing={1}
                    sx={{ width: { xs: '100%', md: '100%' } }}
                >
                    {majorData?.map((data, ind) => {
                        return (
                            <Grid item sx={{ px: { xs: '20px', md: '12px' } }}
                                key={ind} xs={6} lg={2.4} xl={2.4} md={6}
                            >

                                <Paper elevation={0}
                                    className='Major-Card-Business mx-auto'>



                                    <Tooltip
                                        open={tooltipNumber === ind}
                                        PopperProps={{
                                            sx: {

                                                "& .MuiTooltip-tooltip": {
                                                    fontSize: '1.3rem',
                                                    bgcolor: 'white',
                                                    color: 'black',
                                                    boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px'
                                                }
                                            }
                                        }}
                                        title={data.description}
                                        placement="bottom-start">

                                        <div  style={{ display: 'inline-flex' }}>
                                            {/* <StaticImage
                                                onClick={() => console.log("Heloo")}
                                                src='../../images/Majors/Group 23187@2x.png'
                                                alt='image'
                                                objectFit='contain'
                                                style={{ width: '30px', height: '30px', }} /> */}
                                        </div>

                                    </Tooltip>


                                    <Stack sx={{ }} justifyContent="center" alignItems="center">
                                        {data.img}
                                        <Typography className="Major-text-Business" variant="h4">
                                            {data.data}
                                        </Typography>
                                    </Stack>

                                </Paper>
                            </Grid>
                        );
                    })}
                </Grid>
            </div>
        </div>
    );
};

export default MajorsBusiness;

