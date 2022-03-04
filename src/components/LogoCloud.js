import React from 'react';
import CIQLogo from '../images/ciq.svg';
import FortyFiveDrivesLogo from '../images/45drives.svg';
import ArmLogo from '../images/arm.svg';
import AWSLogo from '../images/aws.svg';
import EquinixLogo from '../images/equinix.svg';
import FastlyLogo from '../images/fastly.svg';
import FosshostLogo from '../images/fosshost.svg';
import GoogleCloudLogo from '../images/gcp.svg';
import MattermostLogo from '../images/mattermost.svg';
import AzureLogo from '../images/azure.svg';
import MontaVistaLogo from '../images/montavista.svg';
import NaverCloudLogo from '../images/naver-cloud.svg';
import OpenDrivesLogo from '../images/opendrives.svg';
import OpenSourceLabs from '../images/osl.svg';
import SupermicroLogo from '../images/supermicro.svg';
import VmwareLogo from '../images/vmware.svg';
import { Translate } from '../../i18n/utils/translate';
import LocalizedLink from '../components/LocalizedLink';
import { ArrowRightIcon } from '@heroicons/react/solid';

const LogoCloud = ({ pageContext: { locale: language } }) => {
  const translate = Translate('index');

  return (
    <>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
            {translate('sponsors-partners.backed')}
          </p>
          <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-4 lg:mt-8">
            <a href="https://ciq.co">
              <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                <img
                  className="max-h-12"
                  href="https://ciq.co"
                  src={CIQLogo}
                  alt="Ctrl IQ"
                />
              </div>
            </a>
            <a href="https://45drives.com">
              <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                <img
                  className="max-h-12"
                  src={FortyFiveDrivesLogo}
                  alt="45Drives"
                />
              </div>
            </a>
            <a href="https://arm.com">
              <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                <img className="max-h-12" src={ArmLogo} alt="Arm" />
              </div>
            </a>
            <a href="https://aws.com">
              <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                <img
                  className="max-h-12"
                  src={AWSLogo}
                  alt="Amazon Web Services"
                />
              </div>
            </a>
            <a href="https://equinix.com">
              <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                <img className="max-h-12" src={EquinixLogo} alt="Equinix" />
              </div>
            </a>
            <a href="https://fastly.com">
              <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                <img className="max-h-12" src={FastlyLogo} alt="Fastly" />
              </div>
            </a>
            <a href="https://fosshost.org">
              <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                <img className="max-h-12" src={FosshostLogo} alt="Fosshost" />
              </div>
            </a>
            <a href="https://cloud.google.com">
              <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                <img
                  className="max-h-12"
                  src={GoogleCloudLogo}
                  alt="Google Cloud"
                />
              </div>
            </a>
            <a href="https://mattermost.com">
              <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                <img
                  className="max-h-12"
                  src={MattermostLogo}
                  alt="Mattermost"
                />
              </div>
            </a>
            <a href="https://azure.com">
              <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                <img
                  className="max-h-12"
                  src={AzureLogo}
                  alt="Microsoft Azure"
                />
              </div>
            </a>
            <a href="https://www.mvista.com/">
              <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                <img
                  className="max-h-12"
                  src={MontaVistaLogo}
                  alt="MontaVista"
                />
              </div>
            </a>
            <a href="https://ncloud.com/">
              <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                <img
                  className="max-h-12"
                  src={NaverCloudLogo}
                  alt="Naver Cloud"
                />
              </div>
            </a>
            <a href="https://opendrives.com/">
              <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                <img
                  className="max-h-12"
                  src={OpenDrivesLogo}
                  alt="OpenDrives"
                />
              </div>
            </a>
            <a href="https://osuosl.org/">
              <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                <img
                  className="max-h-12"
                  src={OpenSourceLabs}
                  alt="OSU Open Source Labs"
                />
              </div>
            </a>
            <a href="https://www.supermicro.com/en/">
              <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                <img
                  className="max-h-12"
                  src={SupermicroLogo}
                  alt="Supermicro"
                />
              </div>
            </a>
            <a href="https://vmware.com/">
              <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                <img className="max-h-12" src={VmwareLogo} alt="vmware" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogoCloud;
